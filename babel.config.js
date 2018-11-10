const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

// https://github.com/facebook/jest/issues/2081
const env = {
  production: {
    plugins: ["transform-es2015-modules-commonjs"]
  }
};

module.exports = {
  env,
  presets,
};
