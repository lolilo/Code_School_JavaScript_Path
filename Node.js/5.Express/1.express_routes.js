// Express routes
// 250Points
// Create an express route that responds to GET requests at the URL /tweets that responds with the file tweets.html located in the same directory as app.js
// Make sure you create the app and listen on port 8080

var express = require('express');
var app = express.createServer();

app.get("/tweets", function(request, response) {
  response.sendfile(__dirname + "/tweets.html");
});

app.listen(8080);
