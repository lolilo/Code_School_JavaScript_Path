// Doing the Request
// 250Points
// Next we'll need to include the request module, use that to do a simple web request, and print the returned JSON out to the console. You'll want to check out this example in the readme.

var url = require('url');
var request = require('request');

options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
request(searchURL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the received JSON.
  }
})
