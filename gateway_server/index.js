/* 
    
gateway_server/index.js

A simple back end server to demonstrate a possible entry point or gateway to the backend.
This might be where you expose an API that handles app requests and the "knows" what to do.
For example, late we will see a server called "hidden_server". It is a simple logging service
and is only "known" by the gateway server. From the browser and http_server perspective,
it does not exist. you can think of another use case such as an email server.

*/
// set up the app
const express = require("express");
const request = require("axios");

// we need axios to make HTTP requests to our hidden_server
const { default: axios } = require("axios");

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

// the url to our hidden_server
const hidden_server = "http://localhost:3100"

// local variable to hold the count state
let counter = 0;

// nothing here
app.get("/", function (req, res) {
    res.send("404 Not Found")
});

// our function to increment and log the event
app.get("/increment", function (req, res) {
    counter++;
    axios.get(hidden_server + "/incremented").then((res) => {
        console.log(res.status);
    }).catch((err) => {
        consolee.log(err);
    })
    res.send("The counter is now: " + counter)
});

// returns information on the count
app.get("/count", function (req, res) {
    res.send("The counter is now: " + counter)
});

// part of the initialisation. We set the value for the logger. 
// NOTE: the hidden_server must be running BEFORE this server is started
function setCounter() {
    const params = { count: counter };
    axios.get(hidden_server + "/setCount", { params }).then(res => {
        console.log(res.status);
    }).catch(err => {
        console.log(err.code);
    });
}

// start the server and set the counter on the hidden_server
app.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
}, setCounter);