module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "globals": {
    "$": true,
  },
  "rules": {
    "import/extensions": [ 'always', {ignorePackages: true} ],
    "no-plusplus": 0,
    "no-use-before-define": 0,
  }
};
