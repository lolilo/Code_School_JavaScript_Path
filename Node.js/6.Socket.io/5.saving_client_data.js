// Saving client data I
// 250Points
// In our real-time Q&A app, we want to allow each client only 1 question at a time, but how do we enforce this rule?
// We can use socket.io's ability to save data on the client, so whenever a question is asked, we first want to check the 'question_asked' value on the client. If it's not already set to true, broadcast the question and then go ahead and set the value to true.


var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {
  	client.get('question_asked', function(err, question_asked) {
  		if (!question_asked) {
  			client.broadcast.emit('question', question);
  			client.set('question_asked', true);
  		}
  	});
  });
});
