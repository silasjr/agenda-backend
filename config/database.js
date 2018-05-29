var mongoose = require('mongoose');

module.exports = function (uri) {
    mongoose.connect(uri);

    mongoose.connection.on('connected', function () {
        console.log('Conectado a base de dados '+ uri);
    });

    mongoose.connection.on('error', function (error) {
        console.log('Erro na conexao: ' + error);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Desconectado do MongoDB');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Conexao com o banco de dados fehcada pelo termino da Aplicacao');
            process.exit(0);
        });
    });
}