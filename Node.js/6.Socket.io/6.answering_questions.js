// Answering questions
// 250Points
// Clients can also answer each other questions, so let's build that feature by first listening for the 'answer' event on the client, which will send us both the question and answer, which we want to broadcast out to the rest of the connected clients.



var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  // listen for answers here
  client.on('answer', function(question, answer) {
    client.broadcast.emit('Q&A', question + ": " + answer);
  });


  // client.on('answer', function(question, answer) {
  //   client.broadcast.emit('answer', question, answer);
  // });
	// wow that was fucking bullshit, code school
	
  client.on('question', function(question) {
    client.get('question_asked', function(err, asked) {
      if(!asked) {
        client.set('question_asked', true);
        client.broadcast.emit('question', question);
      }
    });
  });
});
