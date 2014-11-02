// Let's get our feet wet with how functions work by creating a function which will represent a Tour. Remember, this function should start with a capital letter and be defined outside of $(document).ready().

// Then, inside of $(document).ready(), create a new instance of the object created by the Tour function. When that new Tour is created, log a message to the console using console.log.

function Tour() {
	}
$(document).ready(function() { 
	var tour = new Tour();
	console.log(tour);
});

// In order to add a bit of functionality to our Tour, let's pass in the nightly cost of the Tour when we create a new one - maybe 100 for now. In the Tour function, update the declaration to accept this new price argument.

// In order to use this price, create a new function within the Tour named cost, which can be called with a number of nights. This cost function should console.log the number of nights multiplied by the price. We've added the call to cost within $(document).ready(), which you can uncomment once you've implemented.


function Tour(price) {
  console.log("A new Tour was created");
  this.cost = function (nights) {
  console.log(nights * price);
  }
}
$(document).ready(function() { 
  var tour = new Tour(100);
  tour.cost(4);
});

// Up until this point we've only had 1 tour on the page at once, so we were able to hardcode a good deal of the DOM elements. Let's work on refactoring our code to work with multiple tours on the page. We're showing our tour JavaScript object we made in the reference.js file here, but it's not being loaded into the page.

// For starters, create a new Tour function that takes in a jQuery object as a parameter. Create a new instance of a Tour on document.ready, passing in a jQuery object for the #paris location. Within the function, call console.log with the passed in DOM element.

function Tour(el) {
	console.log(el);
}

$(document).ready(function (){
	var tour = new Tour($('#paris'));
})

// Now we're going to finish refactoring our code into the new Tour function. To accomplish this, we'll need to do quite a few things.

// First, recreate an event listener within our Tour which will watch for clicks on any button contained in the passed in element and run the fetchPhotos function. Next, set this.el to the passed in el so that we'll be able access it later on. For now leave the fetchPhotos function empty, but make sure it's called when the button is clicked.

function Tour(el) {
	this.el = el;
	this.fetchPhotos = function () {

	}

	this.el.on('click', 'button', this.fetchPhotos);
}
$(document).ready(function() { 
  var paris = new Tour($('#paris'));
});


// Unfortunately, we can't just copy our existing fetchPhotos method from level 1 straight into our function - we're going to need to make a few changes in order to make it work.

// The biggest change is that we can't query the DOM directly -- instead we'll have to base all DOM queries off of el, the element representing the current tour.

// Update the data option to take in the data from the current tour -- tour.el. Add a context option to the ajax call, giving it a context of tour. After that, within your callbacks, you'll be able to reference the current tour element using this.el rather than #tour. Lastly, instead of finding all .photos only find .photos within the current this.el element.


function Tour(el) {
  var tour = this;
  this.el = el;
  this.fetchPhotos = function() {
    $.ajax('/photos.html', {
      data: {location: $("#tour").data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        $('#tour').addClass('is-fetching');
      },
      complete: function() {
        $('#tour').removeClass('is-fetching');
      }
    });
  };
  this.el.on('click', 'button', this.fetchPhotos);
}
$(document).ready(function() { 
  var paris = new Tour($('#paris'));
});
// changed to

function Tour(el) {  
  var tour = this;
  this.el = el;
  
  this.fetchPhotos = function() {
    $.ajax('/photos.html', {
      data: {location: $("#tour").data('location')},

      context: tour,

      success: function(response) {
        this.el.find('.photos').html(response).fadeIn();
      },
      error: function() {
        this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        this.el.addClass('is-fetching');
      },
      complete: function() {
        this.el.removeClass('is-fetching');
      }
    });
  };
  this.el.on('click', 'button', this.fetchPhotos);
}
$(document).ready(function() { 
  var paris = new Tour($('#paris'));
});


// 2.11 Instances of a Function 250 PTS
// On load, create another instance of a Tour, this time passing in a jQuery object for the #london element.

function Tour(el) {
  var tour = this;
  this.el = el;
  this.fetchPhotos = function() { 
    $.ajax('/photos.html', {
      data: {location: tour.el.data('location')},
      context: tour,
      success: function(response) {
        this.el.find('.photos').html(response).fadeIn();
      },
      error: function() {
        this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
        this.el.addClass('is-fetching');
      },
      complete: function() {
        this.el.removeClass('is-fetching');
      }
    });
  }
  this.el.on('click', 'button', this.fetchPhotos);
}
$(document).ready(function() { 
  var paris = new Tour($('#paris'));
  var london = new Tour($('#london'));
});
