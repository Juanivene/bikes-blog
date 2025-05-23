/* eslint-disable no-console */
import * as fs from 'fs';
import gradient from 'gradient-string';
import { exec, ExecException } from 'node:child_process';

const copyEnv = (env: string) => {
  console.log(
    `\x1b[33m⚙️  Copying \x1b[0m.env.${env}\x1b[33m to \x1b[0m.env.production\x1b[33m...\x1b[0m`
  );

  const envContents = fs.readFileSync(`.env.${env}`, 'utf8');
  const envProdContents = fs.readFileSync('.env.production', 'utf8');

  // write the contents to .env_temp
  fs.writeFileSync('.env_temp', envProdContents);

  // write the contents to .env.production
  fs.writeFileSync('.env.production', envContents);

  console.log(
    `\x1b[32m⚙️  Finished! New \x1b[0m.env.production\x1b[32m contents:\n`
  );
  console.log(`\x1b[2m${envContents}\x1b[0m\n`);
};

const restoreEnv = (env: string) => {
  const envProdContents = fs.readFileSync('.env_temp', 'utf8');

  fs.writeFileSync('.env.production', envProdContents);
  fs.unlinkSync('.env_temp');

  console.log(`\x1b[32m⚙️ Restored \x1b[0m.env.${env}\n`);
};

const runCommand = (
  command: string,
  type: string,
  successMessage: string,
  errorMessage: string
) => {
  return new Promise<void>((resolve, reject) => {
    console.log(`⌛ ${type}...`);
    exec(
      command,
      (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          console.error(
            `\x1b[31m❌ ${errorMessage}\n${error.message}\n${stdout}\x1b[0m`
          );
          reject();
        } else if (stderr) {
          console.error(
            `\x1b[31m❌ ${errorMessage}\n${stderr}\n${stdout}\x1b[0m`
          );
          reject();
        } else {
          console.log(`\x1b[32m✅ ${successMessage}\x1b[0m\n`);
          resolve();
        }
      }
    );
  });
};

const parseArguments = () => {
  const args = process.argv.slice(2);
  const argumentRegex = /^--\w+(?:-\w+)?$/;

  const parsedArgs: string[] = [];
  let currentArg: string | null = null;

  args.forEach((arg) => {
    if (argumentRegex.test(arg)) {
      if (currentArg) {
        parsedArgs.push(currentArg);
      }
      currentArg = arg;
    } else if (currentArg) {
      currentArg += ` ${arg}`;
    }
  });

  if (currentArg) {
    parsedArgs.push(currentArg);
  }

  return parsedArgs;
};

const runBuildCommand = () => {
  const buildArguments = parseArguments();
  const args = buildArguments.join(' ');
  const env = args.includes('--mode')
    ? buildArguments.find((arg) => arg.includes('--mode'))?.split(' ')[1]
    : 'production';

  const isDockerized = args.includes('--docker');

  if (isDockerized)
    console.log('🐳 \x1b[44;37m Dockerized build \x1b[0m Welcome waiter! 🤵🏻‍♂️\n');

  // Copy .env.${env} to .env.production
  copyEnv(env!);

  const buildCommand = `next build`;

  console.log('\x1b[33m🚀 Running build command...\x1b[0m');
  if (args) console.log(`\x1b[33m🔧 Args are: \x1b[0m${args}`);

  console.log('\n\x1b[33m⏱️ Building. Please wait...\x1b[0m');

  if (!isDockerized)
    console.log(
      '\n\x1b[33m⚠️ Warning: If you are running an instance of this project in "dev" mode, please stop it. Otherwise, building won\'t work as expected and may never even start.\x1b[0m'
    );

  exec(
    buildCommand,
    (error: ExecException | null, stdout: string, stderr: string) => {
      console.log('\n', stdout);
      if (stderr) console.log(stderr);

      if (error) {
        console.error(`\n\x1b[31m❌ Build failed: ${error.message}\x1b[0m`);
        throw new Error(error.message);
      } else {
        console.log('\n\x1b[32m✅ Build succeeded\x1b[0m');
      }
      console.log(
        '\n═════════════════════════════════════════════════════════════\n'
      );

      // Restore .env.production only in local machine
      if (!isDockerized) restoreEnv(env!);
      else
        console.log(
          '\x1b[33m⚙️  Skipping .env.production restoration because of \x1b[34m"--docker" 🐳\x1b[33m arg\x1b[0m\n'
        );
    }
  );
};

const runPreBuildScript = async () => {
  let isLint = false;
  let isPreCommit = false;
  let fixESLint = false;
  const buildArguments = parseArguments();
  const args = buildArguments.join(' ');

  if (args.includes('--ignore-build')) {
    isLint = true;
  }

  if (args.includes('--pre-commit')) {
    isPreCommit = true;
  }

  if (args.includes('--fix')) {
    fixESLint = true;
  }

  if (args.includes('-h')) {
    console.log(`
    \x1b[33m🔧 Available commands:\x1b[0m
    \x1b[33m--pre-commit\x1b[0m - Runs pre-commit script
    \x1b[33m--ignore-build\x1b[0m - Runs lint script without building
    \x1b[33m--fix\x1b[0m - Runs lint script, fixing any ESLint errors that can be automatically solved
    `);
    return;
  }

  console.clear();
  if (isPreCommit)
    console.log('\x1b[33m🔍 Running pre-commit script...\x1b[0m\n');
  else if (isLint) console.log('\x1b[33m🔍 Running lint script...\x1b[0m\n');
  else console.log('\x1b[33m🔧 Running pre-build script...\x1b[0m\n');

  try {
    await runCommand(
      'tsc',
      'TypeScript',
      'TypeScript compilation succeeded',
      'TypeScript compilation failed\n\n'
    );
    await runCommand(
      `npx eslint . ${fixESLint ? '--fix' : ''}`,
      'ESLint',
      `ESLint ${fixESLint ? 'check and fix' : 'check'} passed`,
      `ESLint ${fixESLint ? 'check and fix' : 'check'} failed\n\n`
    );
    await runCommand(
      'npm run prettier',
      'Prettier',
      !isLint ? 'Prettier check passed' : 'Prettier fix finished',
      !isLint ? 'Prettier check passed' : 'Prettier fix failed.\n\n'
    );

    console.log(
      '═════════════════════════════════════════════════════════════\n'
    );

    const message = {
      preCommit: 'Pre-commit script completed successfully!',
      preBuild: 'Pre-build script completed successfully!',
      isLint: 'Lint completed successfully! Site is ready for deployment',
    };

    // eslint-disable-next-line no-nested-ternary
    const mode = isPreCommit ? 'preCommit' : isLint ? 'isLint' : 'preBuild';

    const successMessage = gradient(
      '#7aecdd',
      '#ffffff',
      '#f78df7'
    )(message[mode]);
    console.log(`\x1b[32m✨ ${successMessage} 🎉\x1b[0m\n`);
    console.log(
      '═════════════════════════════════════════════════════════════\n'
    );

    if (!isLint) runBuildCommand();
  } catch (error) {
    console.error('\n\x1b[31m❌ Pre-build script failed to complete\x1b[0m\n');
    throw new Error('Pre-build script failed to complete');
  }
};

runPreBuildScript();
