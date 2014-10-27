// Express Server
// 250Points
// Now let's create an express server which queries out for this search term and just returns the json. You'll need to do a few things:
// Require the express module
// Create the express server 'app'
// On a get request to '/', pipe the request(searchURL) to the response.
// Tell the app to listen on port 8080

var url = require('url');
var request = require('request');
var express = require('express');
var app = express.createServer();

app.get("/", function(req, response) { // be careful about req! 
	// Don't confuse compiler by naming the argument "request" if we're using that module/function!

	options = {
	  protocol: "http:",
	  host: "search.twitter.com",
	  pathname: '/search.json',
	  query: { q: "codeschool"}
	};

	var searchURL = url.format(options);
	request(searchURL).pipe(response);
});

app.listen(8080);

// ###### original provided code
var url = require('url');
var request = require('request');

options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);

var app; // Create Server Here
