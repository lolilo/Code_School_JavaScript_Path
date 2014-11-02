// 3.3 Form Submit Event 250 PTS
// Here's a form we used in Try jQuery. As you change the number of nights, we show the updated estimate of the trip cost.

// What we didn't do was add a way to submit the form! Let's go ahead and add a listener for submit on the form which will run a function. This function should accept one parameter - the form submission event. Call preventDefault on this event to stop the browser from following the form submission. We'll write the ajax call in this event handler later.


$(document).ready(function() {
	$('form').on('submit', function(event) {
		event.preventDefault();
	})
});

// 3.4 $.ajax with POST 250 PTS
// We're all set to start handling this form submission using Ajax. within the event handler, we'll need to do a few things. Make an ajax request to the /book URL on the server of type POST. Also pass in the contents of the form as the form data using serialize.

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
    	type: 'POST',
    	data: $('form').serialize()
    	// send data to server
    });
  });
});

// 3.5 Success Callback 250 PTS
// We check our server and we can see that the form is submitting successfully right now. Unfortunately, we're not showing the traveler anything yet!

// Add a callback for success that will handle this case. Set the html of the .tour element as the result from of the ajax request.


// $('.row') will select any element with class="row"
// $('#row') will select the element with id=row
// http://api.jquery.com/category/selectors/

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      // set a callback for a successful server request
      success: function(result) {
      	$('form').remove();
      	$('.tour').html(result);
      }

    });
  });
});

