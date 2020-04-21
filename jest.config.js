module.exports = {
  verbose: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js',
    'jsx',
    'scss',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.scss$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
};
