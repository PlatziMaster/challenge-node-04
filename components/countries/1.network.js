const express = require('express');
const response = require('../../network/response');
const controller = require('./2.controller');
const router = express.Router();

router.post('/', function (req, res) {
  controller
    .addCountry(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.get('/', function (req, res) {
  controller
    .listCountries()
    .then((countries) => {
      response.success(req, res, countries, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.patch('/:id', function (req, res) {
  controller
    .updateCountry(req.params.id, req.body.name)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error interno', 500, e);
    });
});

router.delete('/:id', function (req, res) {
  controller
    .deleteCountry(req.params.id)
    .then(() => {
      response.success(req, res, `País ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error interno', 500, e);
    });
});

module.exports = router;
