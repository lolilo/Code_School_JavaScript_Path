$(document).ready(function() {
  $("#tour").on("click", "button", function() {
  	$.ajax('/photos.html', {
  		success: function(response) {
  			$('.photos').html(response).fadeIn();
  		}

  	})
  });
});


// shortcut using .get
// $.get (url, success)

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
  	$.get('/photos.html', function(response) {
  			$('.photos').html(response).fadeIn();
  	})
  });
});

// You've decided you only want to get photos of london. 
// Use the data option of the $.ajax function to pass a location option. 
// Get the location from the data-location on the #tour element
// using the data method.

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
  	$.ajax('/photos.html', {
  		success: function(response) {
  			$('.photos').html(response).fadeIn();
  		},
		data: {
			location: $("#tour").data('location')
		}
  	})
  });
});

