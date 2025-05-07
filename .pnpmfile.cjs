module.exports = {
  hooks: {
    readPackageJson(pkg) {
      if (pkg.name === 'bcrypt') {
        pkg.scripts = pkg.scripts || {};
        delete pkg.scripts.preinstall;
        delete pkg.scripts.install;
        delete pkg.scripts.postinstall;
      }
      return pkg;
    },
  },
};