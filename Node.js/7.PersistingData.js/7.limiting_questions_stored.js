// Limiting Questions Stored
// 250Points
// Great work! One last thing though, since every time a new question comes in we store it in the questions list, we might run into a problem where there are just too many questions stored in that list.
// Add a callback to the lpush command, and inside that callback use the ltrim command to make sure the questions list always has at most 20 items.

var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  redisClient.lrange("questions", 0, -1, function(err, questions) {
    questions.forEach(function(question) {
      client.emit("question", question);
    });
  })

  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    client.get('question_asked', function(asked) {
      if(!asked) {
        client.set('question_asked', true);
        client.broadcast.emit('question', question);
        
        redisClient.lpush("questions", question, function(err, reply) {
        	redisClient.ltrim('questions', 0, 19);
        });
      }
    });
  });
});
// https://www.codeschool.com/account/courses/real-time-web-with-node-js