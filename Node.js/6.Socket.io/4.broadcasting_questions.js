// Broadcasting questions
// 250Points
// When a question is submitted to our server, we want to broadcast it out to all the connected clients so they can have a chance to answer it.
// In the server below, listen for 'question' events from clients and then emit the 'question' event on all the other clients connected, passing them the question data.



var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");
  client.on('question', function(data) {
    client.broadcast.emit('question', data);
  });// listen here
});