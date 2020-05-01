module.exports = {
  verbose: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx', 'scss'],
  testPathIgnorePatterns: ['./__tests__/setup/', './cypress/'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.scss$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/index.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/index.js',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};