// Persisting Questions
// 250Points
// Let's go back to our live-moderation app and add some persistence, first to the questions people ask.
// Use the lpush command to add new questions to the list named questions. Do this inside the question listener.


var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    client.get('question_asked', function(asked) {
      if(!asked) {
        client.set('question_asked', true);
        client.broadcast.emit('question', question);

        redisClient.lpush('questions', question, function(err, reply) {
        	
        });
        // add the question to the list here
      }
    });
  });
});
