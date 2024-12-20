const config = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'chore',
        'build',
        'ci',
        'docs',
        'refactor',
        'style',
        'test',
        'merge',
      ],
    ],
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 120],
  },
};

export default config;
