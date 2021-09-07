/*

hidden_server/logs/logger.js

Simple logger example to demonstrate using functions from different files in and express app.

*/

const winston = require('winston');
const consoleTransport = new winston.transports.Console();
const myWinstonOptions = {
    transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions);

function logRequest(req, res, next) {
    logger.info(req.url);
    next();
}

module.exports = logRequest;