// Emitting Events
// 250Points
// Read the existing code below and at the bottom trigger both a 'join' event and a 'message' event, sending in strings to each one.


var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
chat.emit('message', "Hi!");
chat.emit('join', "Lilo");