const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: {
        version: 3,
        proposals: true,
      },
    },
  ],
];

module.exports = {
  presets,
};
