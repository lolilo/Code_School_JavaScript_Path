// 4.3 Using $.each() I 250 PTS
// Our site has a popup deals page. We need to write the javascript that will load the current available deals. Let's start out by looping over the result with the $.each() function. Within this loop, console.log() each item for now to get an idea of what the data looks like.



$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      // your code goes here
      $.each(result, function(index, deal) {
      	console.log(deal);
      })
    }
  });
});


// 4.4 Using $.each() II 250 PTS
// Ok, now that we can see what our data looks like, lets go ahead and put the data into our html. We have HTML already created for each deal, so we can use the index within the each loop to locate the deal DOM node to update. Update the name and the price of each deal.

$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each(result, function(index, dealItem) {
        // Your code goes here
        var deal = $('.deal-' + index);
        deal.find('h3').html(dealItem.name);
        deal.find('p').html(dealItem.price);
      });
    }
  });
});


// 4.5 Using $.each() II 250 PTS
// Lets clean up our code a bit. This AJAX call is pretty simple, and it only has a success callback, so lets use the $.getJSON() function to make the call instead.

$('button').on('click', function() {

	var success = function(result) {
	$.each(result, function(index, dealItem) {
	    var dealElement = $('.deal-' + index);
	    dealElement.find('.name').html(dealItem.name);
	    dealElement.find('.price').html(dealItem.price);
	  });
	 };

	$.getJSON('/cities/deals', success)
  // $.ajax('/cities/deals', {
  //   contentType: 'application/json',
  //   dataType: 'json',
  //   success: function(result) {
  //     $.each(result, function(index, dealItem) {
  //       var dealElement = $('.deal-' + index);
  //       dealElement.find('.name').html(dealItem.name);
  //       dealElement.find('.price').html(dealItem.price);
  //     });
  //   }
  // });
});


// 4.6 Using $.map() I 250 PTS
// Someone thought it would be a great idea to have a page which shows flights that are running late. You're going to need to use the $.map() function, lets first console.log() the data being passed to the $.map() callback to see what we're dealing with.


$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    // Your code goes here
    $.map(result, function (item, index) {
    	console.log(item, index);
    });
  });
});


// 4.7 Using $.map() II 250 PTS
// Now you need to create the array of html elements. Create an array of li elements, each with the flightNumber and the time from the ajax result. Insert the resulting array into the .flight-times unordered list element.

$('.update-available-flights').on('click', function() {

  $.getJSON('/flights/late', function(result) {
    var flightElements = $.map(result, function(flightItem, index){
      // Your code goes here
      return "<li>" + flightItem.flightNumber + " " + flightItem.time + " " + "</li>"
    });
    $(".flight-times").html(flightElements);
  });

});


// 4.8 detach() 250 PTS
// Let's take a minute to make our previous code a bit more efficient. Use the .detach() method to remove the .flight-times list element from the DOM before you insert the new listitems. Then, re-insert the .flight-times element back into the .flights element.

$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    var flightElements = $.map(result, function(flightItem, index){
      var flightEl = $('<li>'+flightItem.flightNumber+'-'+flightItem.time+'</li>');
      return flightEl;
    });
    $('.flight-times').detach()
    				  .html(flightElements)
    				  .appendTo('.flights');
  });
});



