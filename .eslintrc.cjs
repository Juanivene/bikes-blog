module.exports = {
  env: {
    browser: true, // Set environment to browser.
    es2024: true, // Enable support for ES2024 features.
    node: true, // Set environment to Node.js.
  },
  // ! Do not change the order of the extends, it may affect their operation
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules.
    'plugin:react/recommended', // Use recommended rules for React.
    'next/core-web-vitals', // Use Next.js core web vitals rules.
    'plugin:@next/next/recommended', // Use recommended rules for Next.js.
    'airbnb', // Extend Airbnb's base configuration.
    'airbnb-typescript', // Extend Airbnb's configuration for TypeScript.
    'plugin:@typescript-eslint/recommended', // Use recommended rules for TypeScript.
    'plugin:jsx-a11y/recommended', // Use recommended rules for JSX accessibility.
    'prettier', // Integrate Prettier rules with ESLint.
    'plugin:prettier/recommended', // Integrate Prettier rules with ESLint.
    'eslint-config-prettier', // Disables rules that might interfere with Prettier.
  ],
  parser: '@typescript-eslint/parser', // Use TypeScript parser.
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript features.
    sourceType: 'module', // Use ECMAScript modules.
    project: './tsconfig.json', // Specify the TypeScript configuration file.
  },
  plugins: [
    'react', // React plugin.
    'react-hooks', // Plugin for React Hooks rules.
    '@typescript-eslint', // TypeScript plugin.
    'import', // Import plugin for managing imports.
    'jsx-a11y', // Plugin for accessibility rules in JSX.
    'prettier', // Prettier plugin for formatting.
  ],
  rules: {
    // ! ESLint Core Rules
    'no-param-reassign': 'off', // Allows reassignment of parameters.
    'arrow-body-style': ['warn', 'as-needed'], // Advises using arrow function body only when necessary.
    'no-console': 'error', // Disables the use of console methods in production.
    'no-duplicate-imports': 'error', // Prevents duplicate imports in the same file.
    camelcase: 'error', // Enforces camelcase naming convention.
    eqeqeq: ['error', 'always'], // Enforces the use of === and !== instead of == and !=.
    'no-shadow': 'error', // Prevents variable declarations from shadowing variables in outer scopes.
    'no-use-before-define': 'error', // Disallows the use of variables before they are defined.
    'consistent-return': 'error', // Requires return statements to either always or never specify values.
    'no-else-return': ['error', { allowElseIf: false }], // Disallows else blocks after return statements unless in an else-if chain.

    'import/extensions': 'off', // no extensions are needed in import statements
    'react/jsx-props-no-spreading': 'off',
    'import/order': 'off', // customized order in .prettierrc
    'func-names': 'off', // disabled to allow IIFEs
    'import/no-extraneous-dependencies': 'off', // disabled to allow devDependencies
    'react/require-default-props': 'off', // deprecated check
    '@typescript-eslint/no-unused-vars': 'off', //! disabled to allow unused vars
    'react/jsx-sort-props': [
      1,
      {
        shorthandFirst: true,
        callbacksLast: true,
      },
    ],
  },
  ignorePatterns: [
    '.next/**',
    'node_modules/',
    'dist/',
    'config/',
    'coverage/',
    '**/*.md',
    '**/*.yml',
    '**/*.json',
    '**/*.css',
  ],
  settings: {
    'import/resolver': {
      typescript: {}, // Ensures correct resolution of TypeScript files.
    },
    react: {
      version: 'detect', // Automatically detects the React version.
    },
  },
};
