const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodejs-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:27017/agenda'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodejs-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/agenda'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodejs-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/agenda'
  }
};

module.exports = config[env];
