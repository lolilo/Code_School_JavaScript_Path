// Emitting Stored Questions
// 250Points
// Now that we have questions stored in redis, let's emit them whenever a new client connects to the server through socket.io.
// Use the lrange command to retrieve an array of questions that represent the questions list in redis. Inside of the lrange callback, use forEach to loop through each question and emit it on the client. Remember, don't use broadcast.emit because we only want to send the questions to the client that is connecting to the server.


var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {

	redisClient.lrange("questions", 0, -1, function(err, questions){
			questions = questions.reverse();
			questions.forEach(function(question) {
			client.emit("question", question) // really fucking bullshit, code school. I had 'questions' string and it failed. -__- 
		});
	});

  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);

  });

  client.on('question', function(question) {
    client.get('question_asked', function(asked) {
      if(!asked) {
        client.set('question_asked', true);
        client.broadcast.emit('question', question);
        
        redisClient.lpush("questions", question);
      }
    });
  });
});
