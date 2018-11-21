const config = require('./jest.config');

config.testRegex = 'app/[a-z]+\\.e2e\\.jsx?$';
config.bail = true;

module.exports = config;
