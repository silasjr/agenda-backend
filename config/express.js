var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

consign({cwd: 'app'})
    .include('models')
        .then('api')
        .then('routes')
    .into(app);

module.exports = app;