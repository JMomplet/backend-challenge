'use strict';

const logger = require("../logger");

const Order = require('../models/order');
const Phone = require('../models/phone');

exports.createOrder = function (req, res) {
    let orderData = req.body;

    //Lets check if the order has the necessary data
    if (!orderData.hasOwnProperty('name') ||
        !orderData.hasOwnProperty('surname') ||
        !orderData.hasOwnProperty('email')) {
        return res.status(400).send({message: "You need to specify a name, surname and email for the order to be valid"})
    }

    if (!orderData.hasOwnProperty('phones') || orderData.phones.length === 0) {
        return res.status(400).send({message: "The phone list is empty"})
    }

    Phone.find({"_id": {"$in": orderData.phones}}, function (err, phones) {
        if (!phones.length) {
            return res.status(400).send({message: "The request didn't contain any valid phone"})
        }

        let totalPrice = 0;
        phones.forEach(function (value) {
            totalPrice += value.price;
        });

        orderData.totalPrice = totalPrice;

        logger.info(JSON.stringify(orderData));
        return res.status(200).send(orderData);
    });
};