module.exports = api => {
  api.extendPackage({
    dependencies: {
      '@uvue/core': '^0.4.0-alpha.0',
      '@uvue/server': '^0.4.0-alpha.0',
    },
    devDependencies: {
      'webpack-node-externals': '^1.7.2',
    },
  });
};