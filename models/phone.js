'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const specsSchema = Schema({
    display: String,
    ram: String,
    storage: String
}, {_id: false});

const phoneSchema = Schema({
    brand: String,
    model: String,
    image: String,
    specs: specsSchema,
    description: String,
    price: Number
});

module.exports = mongoose.model('Phone', phoneSchema);