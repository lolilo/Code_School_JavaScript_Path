// Setting up Socket.io server-side
// 250Points
// Below we've already created an express server, but we want to start building a real-time Q&A moderation service and we've decided to use socket.io.
// Require socket.io and make sure it listens for requests on the express app.
// Also, print out a message to the console whenever a new socket.io client connects to the server.

var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

io.sockets.on('connection', function(client) {
	console.log('Client connected...');
})

