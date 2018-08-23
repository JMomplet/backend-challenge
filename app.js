'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const phonesRoutes = require('./routes/phones');
const orderRoutes = require('./routes/orders');

app.use(phonesRoutes);
app.use(orderRoutes);

module.exports = app;