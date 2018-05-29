var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    email:String,
    phones: Array,
    nascimento: Date,
    photo: String
}, {collection: 'Contato'});
mongoose.model('Contato', schema);