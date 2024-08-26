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
    camelcase: [
      'error',
      {
        properties: 'always', // Enforces camelCase naming for all properties.
        ignoreDestructuring: false, // Do not ignore destructured variables.
        ignoreImports: false, // Do not ignore import names.
        ignoreGlobals: false, // Do not ignore global variables.
        allow: [], // Allow specific exceptions.
      },
    ],
    eqeqeq: ['error', 'always'], // Enforces the use of === and !== instead of == and !=.
    'no-shadow': 'error', // Prevents variable declarations from shadowing variables in outer scopes.
    'no-use-before-define': 'error', // Disallows the use of variables before they are defined.
    'consistent-return': 'error', // Requires return statements to either always or never specify values.
    'no-else-return': ['error', { allowElseIf: false }], // Disallows else blocks after return statements unless in an else-if chain.
    'valid-jsdoc': [
      'warn',
      {
        requireReturn: true, // Requires functions to have a @returns comment if they return a value.
        requireReturnType: true, // Requires functions to have a type specified in @returns.
        requireParamDescription: true, // Requires a description for each parameter in @param.
        requireReturnDescription: true, // Requires a description for the return value in @returns.
        matchDescription: '.+', // Ensures that the overview is not empty.
        prefer: {
          return: 'returns', // Prefer to use @returns instead of @return.
          arg: 'param', // Prefer to use @param instead of @arg.
          argument: 'param', // Prefer to use @param instead of @argument.
          constructor: 'class', // Prefer to use @class instead of @constructor.
          throws: 'exception', // Prefer to use @exception instead of @throws.
        },
        preferType: {
          // Prefer the use of lowercase primitive types.
          Boolean: 'boolean',
          Number: 'number',
          String: 'string',
          Object: 'object',
          Array: 'Array',
          Undefined: 'undefined',
        },
        requireParamType: true, // Requires all @param to have a specified type.
      },
    ],

    // ! eslint-plugin-react Rules
    'react/react-in-jsx-scope': 'off', // Disables the rule requiring React to be in scope for JSX files (unnecessary in React 17+).
    'react/function-component-definition': 'off', // Allows defining functional components without style restrictions.
    'react/jsx-props-no-spreading': 'off', // Allows the use of spread props in JSX.
    'react/jsx-sort-props': [
      1,
      {
        shorthandFirst: true, // Sorts shorthand props first.
        callbacksLast: true, // Places callbacks at the end.
      },
    ],
    'react/require-default-props': 'off', // Disables the rule requiring default props for functional components.
    'react/jsx-key': 'error', // Ensures all list elements in JSX have a key.
    'react/jsx-no-bind': [
      'warn',
      { allowFunctions: true, allowArrowFunctions: true },
    ], // Discourages the use of `.bind` in JSX to avoid performance issues.

    // ! eslint-plugin-react-hooks Rules
    'react-hooks/rules-of-hooks': 'error', // Enforces the rules of hooks (use hooks only within functions and at the top level).
    'react-hooks/exhaustive-deps': 'warn', // Warns if dependencies are missing in React effects (useEffect, etc.).

    // ! Additional rules disabled or modified from eslint-config-airbnb and others
    'func-names': 'off', // Allows the use of anonymous functions, especially in IIFEs.

    // ! eslint-plugin-import Rules
    'import/prefer-default-export': 'error', // Allows named exports even if there is only one export.
    'import/extensions': 'off', // Allows omitting file extensions in imports.
    'import/order': 'off', // Disables automatic sorting of imports (controlled by Prettier).
    'import/no-extraneous-dependencies': 'off', // Allows importing dependencies marked as devDependencies.
    'import/no-unresolved': 'error', // Ensures all imports can be resolved.
    'import/named': 'error', // Ensures named imports exist.
    'import/no-absolute-path': 'error', // Disallows the use of absolute paths in imports.

    // ! @typescript-eslint/eslint-plugin Rules
    '@typescript-eslint/no-empty-interface': 'off', // Allows defining empty interfaces in TypeScript.
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error', // Requires explicit return types on functions and class methods.
    '@typescript-eslint/ban-types': 'error', // Disallows specific types (e.g., `Object`, `Function`).
    '@typescript-eslint/type-annotation-spacing': 'error', // Requires consistent spacing around type annotations.
    '@typescript-eslint/no-explicit-any': 'error', // Avoids the use of the `any` type in TypeScript.
    '@typescript-eslint/ban-ts-comment': 'warn', // Discourages unnecessary `@ts-ignore` comments.
    '@typescript-eslint/no-floating-promises': 'error', // Avoid using floating promises.
    '@typescript-eslint/no-unsafe-assignment': 'error', // Avoid unsafe assignments.
    '@typescript-eslint/no-unsafe-member-access': 'error', // Prevent unsafe access to members of an object.
    '@typescript-eslint/no-unsafe-call': 'error', // Avoid unsafe function calls.
    '@typescript-eslint/no-misused-promises': 'error', // Avoid misuse of promises.

    // ! eslint-plugin-prettier Rules
    'prettier/prettier': 'error', // Run Prettier as an ESLint rule and report differences as errors.

    // ! eslint-plugin-jsdoc Rules
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true, // Require JSDoc for function declarations.
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: true, // Require JSDoc for arrow functions.
          FunctionExpression: false,
        },
      },
    ],

    'no-eval': 'error', // Disable the use of eval.
    'no-implied-eval': 'error', // Disable the use of implicit eval.
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Ensures correct resolution of TypeScript files.
    },
    react: {
      version: 'detect', // Automatically detects the React version.
    },
  },
};
