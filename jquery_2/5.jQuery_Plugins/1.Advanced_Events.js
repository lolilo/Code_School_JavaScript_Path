// 5.3 Removing Event Handlers 250 PTS
// We're prototyping a page right now that will fetch some content from around the web and display it so that our travelers can find out about the weather and see more pictures for destinations they are interested in. In chapter 6 we'll make this content dynamic, but for now we'll hardcode it.

// The problem is the button can be clicked any number of times and it'll always append the weather. Update this to instead remove the event handler when it's clicked. Note: You can access the clicked button using $(this).


$(document).ready(function(){
  // Get Weather
  $('button').on('click', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click');
  });
});

// 50 PTS
// Turns out another coworker added some functionality to this same button to show photos. We want to keep both button event handlers working separate from each other, but right now our weather handler will remove the event handler for photos when clicked!

// Namespace the weather event handler to the weather namespace and update how it is removed to prevent this.

$(document).ready(function(){
  // Get Weather
  $('button').on('click.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click.weather');
  });
  
   // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    $(this).off('click.photos');
  });
});

// 5.5 Trigger 250 PTS
// When testing out our code, we keep having to refresh the page and click on the button. Let's make things a little easier by triggering a click on the button when the page loads.

$(document).ready(function(){
  // Get Weather
  $('button').on('click.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click.weather');
  });

   // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    $(this).off('click.photos');
  });

  $('.button').trigger('click');
});


// 5.6 Custom Events 250 PTS
// What if we wanted to run these in a specific order? By default jQuery will run them in the order they are declared, but we could also control the order by triggering one event from the other.

// Change the click.weather event to a new custom event, no longer listening for click. Trigger this event from within the click.photos event handler.

$(document).ready(function(){
  // Get Weather
  $('button').on('click.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click.weather');
  });
  
  // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    $(this).off('click.photos');
  });
});


// change

$(document).ready(function(){
  // Get Weather
  $('button').on('show.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('show.weather');
  });
  
  // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    $(this).trigger('show.weather');
    $(this).off('click.photos');
  });
});


