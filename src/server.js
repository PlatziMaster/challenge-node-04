var express = require('express');
var app = express();

const bodyParser = require('body-parser');
const db = require('./db');
const router = require('../network/routes');

const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

db(
  `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use('/app', express.static('public'));

app.listen(3000, function () {
  console.log('Servidor esta funcionando http://localhost:3000/');
});
