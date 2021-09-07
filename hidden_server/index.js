/* 

hidden_server/index.js

A simple server dedicated to logging events in the wider system. It's API allows
a local variable to be set to the current count when the gateway_server starts up.
Whenever the front end web button is pressed, the gateway_server will use this
service to log the event.

logs/logger.js

In this file we implement a common logger library and the export a method to interact 
with the  logger. It is then used as a middleware callback inside the app.

*/

// set up the app
const express = require("express");
const logger = require("./logs/logger"); // importing our logging middleware function
const app = express();
const port = parseInt(process.env.PORT, 10) || 3100;

// let the app know about the middleware
app.use(logger);

// local variable to track the counter incrementing on the other server
let _counter;

// nothing here
app.get("/", function (req, res) {
    res.send("404 Not Found")
});

// react to an increment from the other server and log it
app.get("/incremented", function (req, res) {
    _counter++;
    console.log("incremented at: " + Date.now() + " and value is: " + _counter);
    res.sendStatus(200);
}, logger);

// initialise the _counter variable
// NOTE: this server MUST be started BEFORE the gateway_server
app.get("/setCount", function (req, res) {
    _counter = parseInt(req.query.count);
    res.sendStatus(200);
}, logger);

// start the server
app.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
});