module.exports = function(app) {

    var api = app.api.contato;

    app.route('/v1/contatos')
        .get(api.listAll)
        .post(api.save);

    app.route('/v1/contatos/:id')
        .get(api.get)
        .put(api.update)
        .delete(api.delete);
}