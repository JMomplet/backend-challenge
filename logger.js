'use strict';

const winston = require('winston');

let options = {};
//We will need this to avoid logs showing while we run tests
if (process.env.NODE_ENV === "test") {
    options.silent = true;
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new (winston.transports.Console)(options)]
});

module.exports = logger;