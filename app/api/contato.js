var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Contato');


api.listAll = function (req, res) {
  model.find({}, (err, docs) => {
    if (err) throw err;
    res.json(docs);
  })
}

api.save = function (req, res) {
  var contato = req.body;

  model.create(contato)
    .then(function (contato) {
      res.json(contato);
    }, function (error) {
      console.log(error);
      res.status(500).json(error);
    });
}

api.get = function (req, res) {
  model
    .findById(req.params.id)
    .then(function (contato) {
      if (!contato) {
        res.status(404).json({message: 'Contato nao encontrado'});
        return null;
      }
      res.json(contato);
    }, function (error) {
      console.log(error);
      res.status(500).json(error);
    })
}

api.update = function (req, res) {
  model
    .findByIdAndUpdate(req.params.id, req.body)
      .then((contato) => {
        if (!contato) {
          res.sendStatus(404);
          return contato;
        }
        res.json(contato);
      }, (error) => {
        console.log(error);
        res.status(500).json(error);
      })
}

api.delete = function (req, res) {
  model
    .remove({_id: req.params.id})
    .then(() => {
      res.sendStatus(204);
    }, (error) => {
      console.log(error);
      res.status(500).json(error);
    })
}

module.exports = api;