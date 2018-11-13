const config = require('./jest.config');

config.testRegex = 'app/[a-z]+\\.test\\.jsx?$';
config.collectCoverage = true;
module.exports = config;
