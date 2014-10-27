// Rendering
// 250Points
// Instead of just writing out the quote to the response, instead render the quote.ejs template, passing in the quote name and quote body.
// Then finish the quote.ejs view, by printing out the quote name and body.


var express = require('express');
var app = express.createServer();
var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(request, response) {
	var name = request.params.name;
	var quote = quotes[name];

	// render template here
	response.render('quote.ejs', {quote : quote, name : name}); // pass in .ejs template file and object
});

app.listen(8080);

// quote.ejs
// <h2>Quote by <%= name %></h2>

// <blockquote>
//   <%= quote %>
// </blockquote>

