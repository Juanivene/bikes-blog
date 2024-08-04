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
    'plugin:prettier/recommended', // Integrate Prettier rules with ESLint.
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
    'prettier', // Prettier plugin for formatting.
    'import', // Import plugin for managing imports.
    'jsx-a11y', // Plugin for accessibility rules in JSX.
  ],
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

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
