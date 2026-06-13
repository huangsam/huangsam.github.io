function readPackage(pkg) {
  // Apply pnpm overrides
  pkg.overrides = {
    ...pkg.overrides,
    cookie: '^0.7.0',
  };
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
