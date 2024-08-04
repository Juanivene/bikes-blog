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

    'no-eval': 'error', // Disable the use of eval.
    'no-implied-eval': 'error', // Disable the use of implicit eval.

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

    // ! eslint-plugin-prettier Rules
    'prettier/prettier': 'error', // Run Prettier as an ESLint rule and report differences as errors.

    // ! eslint-plugin-import Rules
    'import/prefer-default-export': 'error', // Allows named exports even if there is only one export.
    'import/extensions': 'off', // Allows omitting file extensions in imports.
    'import/order': 'off', // Disables automatic sorting of imports (controlled by Prettier).
    'import/no-extraneous-dependencies': 'off', // Allows importing dependencies marked as devDependencies.
    'import/no-unresolved': 'error', // Ensures all imports can be resolved.
    'import/named': 'error', // Ensures named imports exist.
    'import/no-absolute-path': 'error', // Disallows the use of absolute paths in imports.

    // // ! eslint-plugin-react Rules
    // 'react/react-in-jsx-scope': 'off', // Disables the rule requiring React to be in scope for JSX files (unnecessary in React 17+).
    // 'react/function-component-definition': 'off', // Allows defining functional components without style restrictions.
    // 'react/jsx-props-no-spreading': 'off', // Allows the use of spread props in JSX.
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
