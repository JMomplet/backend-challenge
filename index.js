'use strict';

const mongoose = require("mongoose");
const logger = require("./logger");
const app = require('./app');

let PORT;
if (process.env.NODE_ENV === 'test') {
    PORT = 3001;
} else {
    PORT = 3000;
}

const HOST = "0.0.0.0";

mongoose.Promise = global.Promise;

mongoose
    .connect('mongodb://mongo:27017/phoneapp', {useNewUrlParser: true})
    .then(() => {
        logger.info("Database connection stablished");

        app.listen(PORT, HOST, () => {
            logger.info("Server running...");
        })
    })
    .catch(err => {
        logger.error(err);
    });

module.exports = app;