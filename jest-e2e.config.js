const config = require('./jest.config');

config.testRegex = 'app/[a-z]+\\.e2e\\.jsx?$';
module.exports = config;
