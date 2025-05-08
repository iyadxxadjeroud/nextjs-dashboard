module.exports = {
  hooks: {
    readPackageJson(pkg) {
      if (pkg.name === 'bcrypt') {
        pkg.scripts = pkg.scripts || {};
        // Force a rebuild of bcrypt using node-gyp
        pkg.scripts.postinstall = 'node-gyp rebuild';
      }
      return pkg;
    },
  },
};