// Route params
// 250Points
// Create a route that responds to a GET request '/quotes/<name>', then use the param from the URL to retrieve a quote from the quotes object and write it out to the response. Note: No piping here, just write the quote string to the response like you did in previous levels (and then close the response).


var express = require('express');
var app = express.createServer();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get("/quotes/:name", function(request, response) {
	var name = request.params.name;
	response.write(quotes[name]);
	response.end();
});

app.listen(8080);

