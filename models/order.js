'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = Schema({
    name: String,
    surname: String,
    email: String,
    phones: [{type: Schema.Types.ObjectId, ref: 'Phone'}],
    totalPrice: Number
});

module.exports = mongoose.model('Order', orderSchema);