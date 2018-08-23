'use strict';

const Phone = require('../models/phone');

exports.getAllPhones = function (req, res) {
    Phone.find({}, (err, phones) => {
        if (err) {
            return res.status(500).send({message: "Database error"});
        }

        return res.status(200).send(phones);
    });
};
