var http = require('http');
var app = require('./config/express');
var config = require('./config/config');
require('./config/database')(config.db);

http.createServer(app)
    .listen(config.port, function () {
        console.log('Servidor rodando na porta 3000');
    });