var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('¡Hola!');
});

app.get('/add', function (req, res) {
  res.send('Aquí puedes colocar tu código para agregar datos a tu base');
});

app.get('/list', function (req, res) {
  res.send('Aquí puedes colocar tu código para listar datos de tu base');
});

app.get('/edit', function (req, res) {
  res.send('Aquí puedes colocar tu código para editar un dato de tu base');
});

app.get('/delete', function (req, res) {
  res.send('Aquí puedes colocar tu código para eliminar datos de tu base');
});

app.listen(3000, function () {
  console.log('Servidor esta funcionando http://localhost:3000/');
});
