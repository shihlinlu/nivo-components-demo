module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/jest/fileMock.js',
    '^xp-styled-components$': '<rootDir>/src/themes/styledComponents.ts',
    '^xp-common/(.*)$': '<rootDir>/src/common/$1',
    '^xp-pages/(.*)$': '<rootDir>/src/pages/$1',
    '^xp-data/(.*)$': '<rootDir>/src/data/$1',
    '^xp-resources/(.*)': '<rootDir>/src/resources/$1',
    '^xp-session/(.*)$': '<rootDir>/src/session/$1',
    '^xp-themes/(.*)$': '<rootDir>/src/themes/$1',
    '^xp-utility/(.*)$': '<rootDir>/src/utility/$1',
    '^xp-testUtils/(.*)$': '<rootDir>/src/testingUtils/$1',
    '^xp-src/(.*)$': '<rootDir>/src/$1',
  },

  // globals: {
  //   'ts-jest': {
  //     babelConfig: { env: { test: { plugins: ['dynamic-import-node'] } } },
  //   },
  // },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupJest.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.js',
    'src/**/*.jsx',
    '!src/themes/**',
    '!src/**/Styled*.tsx',
    '!src/**/Styled*.ts',
    '!src/**/*Actions.ts',
    '!src/mainStore.ts',
    '!src/App.tsx',
    '!src/AppView.tsx',
    '!src/StyledAppComponents.tsx',
    '!src/index.tsx',
    'src/utility/redux/*.ts',
  ],
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    'src/common/**': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
