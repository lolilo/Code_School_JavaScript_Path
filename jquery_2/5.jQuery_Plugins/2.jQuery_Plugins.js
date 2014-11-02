// 5.8 Declaring a jQuery plugin 250 PTS
// Let's revisit our Vacation Photos page from Try jQuery. Previously we wrote some code to show the photos when each link was clicked. We'll see what we can do to refactor this functionality into a jQuery Plugin.

// To start off, create a new jQuery plugin named photofy. Call it within your event handler for all .tour elements. Make your plugin call console.log passing in this -- the elements that we are attempting to photofy.

$.fn.photofy = function() {
	console.log(this);
}

$(document).ready(function() {
	$('.tour').photofy();
});

// 5.9 Iteration with each 250 PTS
// Looks like the page loads without any errors, but it doesn't yet do anything. Within your plugin, loop through each object passed in and run console.log(this) within the loop.

// $.fn.photofy = function(obj) {
// 	var tour = this; // "this" will be $('.tour')
// }

$.fn.photofy = function() {
	this.each(function() { // 'this' will be $('.tour')
		console.log(this); 
	})
}

$(document).ready(function() {
  $('.tour').photofy(); // photofy all tours at once
});

// 5.10 Plugin Event 250 PTS
// For each tour that we are using our "photofy" plugin on, we'll want to do a few things.

// For starters create an event handler using on, that targets the .see-photos link within each .tour. When this is clicked, run a function that will add a class of is-showing-photofy to the tour. You'll probably want to save a reference to this outside of your event handler, and use that in the click event handler.

$.fn.photofy = function() {
	this.each(function() {
		var tour = $(this); //jQuery object vs DOM element
		tour.on('click.photofy', '.see-photos', function(event) {
			event.preventDefault();
			tour.addClass('is-showing-photofy');
		})
	})
}

$(document).ready(function() {
  $('.tour').photofy();
});


// 5.11 Using $.extend() 250 PTS
// We'll need to update our plugin to accept and use an options JavaScript Object that we're passing in. Looks like someone started refactoring the show method already to use a variable called settings, which uses a count and a tour key in settings.

// Create a variable, settings, that defaults the count to 3, and sets tour to the current tour element -- $(this). Then, update the call to photofy on load to pass in a JavaScript object with a count of 1.

$.fn.photofy = function(options) {
  this.each(function() {
  	// var settings = $.extend({ count: 3}, options);
  	// settings.tour = $(this);

  	var settings = $.extend({
  		count: 3, 
  		tour: $(this)
  	}, options);
    var show = function(e) {
       e.preventDefault();
       settings.tour 
               .addClass('is-showing-photofy')
               .find('.photos')
               .find('li:gt('+(settings.count-1)+')').hide();
     }
     
     settings.tour.on('click.photofy', '.see-photos', show);
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
});

// 5.12 External Triggers 250 PTS
// We've added an event handler to the "Show all photos" link above the tours. Within this event handler, you'll need to trigger an event, show.photofy, on all tours. Update the plugin to listen for this event and call the show function when it receives it.

$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
      e.preventDefault();
      settings.tour
              .addClass('is-showing-photofy')
              .find('.photos')
              .find('li:gt('+(settings.count-1)+')')
              .hide();
    }
    var settings = $.extend({
      count: 3,
      tour: $(this)
    }, options);
    settings.tour.on('click.photofy', '.see-photos', show);
  });
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
  
  $('.show-photos').on('click', function(e) {
    e.preventDefault();
    // Trigger `show.photofy`
  });
});

// change

$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
      e.preventDefault();
      settings.tour
              .addClass('is-showing-photofy')
              .find('.photos')
              .find('li:gt('+(settings.count-1)+')')
              .hide();
    }
    var settings = $.extend({
      count: 3,
      tour: $(this)
    }, options);
    settings.tour.on('click.photofy', '.see-photos', show);
    settings.tour.on('show.photofy', show);
  });
}
 
$(document).ready(function() {
  $('.tour').photofy({ count: 1});
  
  $('.show-photos').on('click', function(e) {
    e.preventDefault();
    $('.tour').trigger('show.photofy');
  });
});

// 5.13 Internal Triggers 250 PTS
// When we're viewing photos, there's a link that comes up to 'Hide Tour'. Within the plugin, watch for click on this link, .hide-tour. When it is clicked, call fadeOut() on the tour and remove all events namespaces to photofy.


$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
      e.preventDefault();
      settings.tour
              .addClass('is-showing-photofy')
              .find('.photos')
              .find('li:gt('+(settings.count-1)+')')
              .hide();
    }
    var settings = $.extend({
      count: 3,
      tour: $(this)
    }, options);
    settings.tour.on('click.photofy', '.see-photos', show);
    settings.tour.on('show.photofy', show);
    settings.tour.on('click.photofy', '.hide-tour', function(e) {
    	e.preventDefault();
      	settings.tour.off('.photofy');
    	settings.tour.fadeOut();
  });
})
}

$(document).ready(function() {
  $('.tour').photofy({ count: 1});
  
  $('.show-photos').on('click', function(e) {
    e.preventDefault();
    $('.tour').trigger('show.photofy');
  });
});
