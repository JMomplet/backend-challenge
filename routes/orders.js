'use strict';

const express = require('express');
const ordersController = require('../controllers/orders');

const api = express.Router();

api.post('/orders', ordersController.createOrder);

module.exports = api;