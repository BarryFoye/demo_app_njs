/* 

http_server/index.js

A simple http server that serves up some static .html content.
The content is located in the public folder and served using express.static method.

public/index.html

Contains a basic html page with a button that increments a counter. There is nothing
special except the click makes a call to the back end "gateway_server" instructing it
to increment it's counter by 1. On response, the web page updates a counter to reflect
the change.

*/

// set up the app
const express = require("express");

const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;

// tell the app where the static content is
app.use(express.static(__dirname + '/public'));


// start the server
app.listen(port, err => {
    if (err) throw err;
    console.log(`> HTTP_server ready on http://localhost:${port}`);
});