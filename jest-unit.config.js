const config = require('./jest.config');

config.testRegex = 'src/[a-z]+\\.test\\.jsx?$';
config.collectCoverage = true;
config.coverageDirectory = 'coverage';
config.coverageThreshold = {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: -10,
  },
};

module.exports = config;
