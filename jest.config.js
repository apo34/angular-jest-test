module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html$',
      tsConfig: 'tsconfig.json',
      astTransformer: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')]
    },
  },
  roots: ['src'],
  setupTestFrameworkScriptFile: '<rootDir>/testing/setup-jest.ts',
  moduleNameMapper: {
    '@app/core': '<rootDir>/src/app/',
    '@testing': '<rootDir>/testing',
    '@environment': '<rootDir>/src/environments/environment.ts',
  },
  testMatch: [
    '**/plugin/**/*component.spec.ts',
  ],
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      pageTitle: 'Test Report',
      outputPath: './testing/test-report.html',
      theme: 'lightTheme'
    }]
  ],
  coverageDirectory: '<rootDir>/testing/coverage',
  collectCoverageFrom: [
    '**/plugin/**/*.ts',
  ],
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|ngx-auto-unsubscribe|lodash)"
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
};
