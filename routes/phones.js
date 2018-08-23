'use strict';

const express =  require('express');

const phonesController = require('../controllers/phones');

const api = express.Router();

api.get('/phones', phonesController.getAllPhones);

module.exports = api;