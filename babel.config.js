const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 'core-js@3',
    },
  ],
];

module.exports = {
  presets,
};
