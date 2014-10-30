x
// errors
$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }, 
      error: function(request, errorType, errorMessage) {
      	$('.photos').html("<li>Sorry, we encountered an error when processing your request.</li>");
      }
    });
  });
});

// timeout

$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      },
      timeout: 3000
    });
  });
});

// more callbacks
// Things are working fine, but we could make it better. While the server is responding, the traveler has no indication that anything is happening.

// Our designers have added some special styling to account for this. Before the ajax command is sent, add a class of is-fetching to our #tour element, then remove this class after the request is complete.


$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html', {
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
  });
});


// event delegation
// One other thing we did in Try jQuery was make the labels show up over the photos when we moused over them. For some reason these are no longer working.

// It looks like we're trying to define our mouseover events when the DOM loads, but since we're loading them with Ajax it's not finding them. Update these to use event delegation, ensuring they'll work if we load them via Ajax.


$(document).ready(function() {
  function showPhotos() {
    $(this).find('span').slideToggle();
  }
  // $('.photos li').on('mouseenter', showPhotos)
  //                .on('mouseleave', showPhotos);

  $('.photos').on('mouseenter', 'li', showPhotos)
                 .on('mouseleave', 'li', showPhotos);

  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
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
  });
});



