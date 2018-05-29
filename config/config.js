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
    db: 'mongodb://admin:admin.123@ds239930.mlab.com:39930/agenda'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodejs-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:admin.123@ds239930.mlab.com:39930/agenda'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodejs-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:admin.123@ds239930.mlab.com:39930/agenda'
  }
};

module.exports = config[env];
