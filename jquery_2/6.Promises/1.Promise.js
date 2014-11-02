// 6.3 Reusable AJAX 250 PTS
// You have a piece of javascript code which uses an AJAX call to find the vacation price of cities. This code may be useful to use in a few different parts of your site. Lets go ahead and rewrite this to make it reusable.

// Create a Vacation JavaScript object which contains a getPrice function which takes one argument: location. Add the AJAX call currently in the application.js file to the getPrice function. Make sure this function returns a promise. Our "Update Price" button won't call it yet, but we'll do that next.


// returns a "promise" object
var Vacation = {
	getPrice: function(location) {
		return  $.ajax('/vacation/prices', {
      	data: {q: location},
	    success: function(result){
        $('.price').text(result.price);
      }
    });
	}
}


// 6.4 Using the Vacation 250 PTS
// Lets edit the original code to use the Vacation object we just created. Add a .done() callback function to your Vacation object that will run the same function as our current success callback.

$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    var vacationPromise = Vacation.getPrice(location);
    vacationPromise.done(function(result) {
    	$('.price').text(result.price);
    })


    // $.ajax('/vacation/prices', {
    //   data: {q: location},
    //   success: function(result){
    //     $('.price').text(result.price);
    //   }
    // });

  });
});

// 6.5 Simplifying the result 250 PTS
// Great! Lets make it a little easier to use our Vacation object by creating a custom promise and handling the result output ourselves. That way instead of needing result.price in the 'application.js', you'll be able to just use result.

// Use $.Deferred() to create your own promise (set the promise variable with this), and use the .resolve() function to pass the result to the .done() callback.

// The demo for this won't work yet because we're still looking for result.price, but we'll change that next.


var Vacation = {
  getPrice: function(location){
   var promise = $.ajax('/vacation/prices', {
     data: {q: location}
   });

   return promise;
  }
}

var Vacation = {
  getPrice: function(location){
   var promise = $.Deferred();
   $.ajax('/vacation/prices', {
   	data: {q: location},
   	success: function(result) {
   		promise.resolve(result.price);
   	}
   })

   return promise;
  }
}

// 6.6 The Simple Result 250 PTS
// You're almost finished! All that's left is to change result.price to result in your application.js.

$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    Vacation.getPrice(location).done(function(result){
      $('.price').text(result);
    });
  });
});

// 6.7 Promising Errors 250 PTS
// We just realized: what happens if an error is returned with our ajax call? Our custom promise isn't setup to handle errors. We need to add an error handler that can reject your promise. Go ahead and create this error handler and make sure to pass some sort of error message to the reject() function.

var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();
    $.ajax({
      url: '/vacation/prices',
      data: {q: location},
      success: function(result){
        promise.resolve(result.price);
      },
      error: function() {
      	var error = 'invalid location';
      	promise.reject(error);
      }
    });
    return promise;
  }
}

// 6.8 Fail() 250 PTS
// Finish up handling errors by adding a fail handler to your application.js that logs the error to the console.

$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    Vacation.getPrice(location).done(function(result){
      $('.price').text(result);
    }).fail(function(error) {
    	console.log(error);
    });
  });
});

// 6.9 When() and Then() 250 PTS
// You have two AJAX calls that are used to render an html page. The problem is that since the data gets back at different times, your html flickers and elements show up in different orders.

// Use $.when() and .then() to refactor these two calls so that html gets rendered at the same time.


$(document).ready(function() {
  $('button').on('click', function(){
    var tour = $(this).parent();
    var location = tour.data('location');
    var resultDiv = tour.find('.results').empty();


    // Vacation.getPrice(location).done(function(priceResult){
    //   $('<p>$'+priceResult+'</p>').appendTo(resultDiv);
    // });

    // Photo.getPhoto(location).done(function(photoResult){
    //   $('<img />').attr('src', photoResult).appendTo(resultDiv);
    // });

  	$.when(
  		Vacation.getPrice(location),
  		Photo.getPhoto(location)
  		).then(function(priceResult, photoResult) {
  			$('<p>$'+priceResult+'</p>').appendTo(resultDiv);
  			$('<img />').attr('src', photoResult).appendTo(resultDiv);
  		})


  });
});
