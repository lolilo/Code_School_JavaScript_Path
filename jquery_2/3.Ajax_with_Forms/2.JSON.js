// 3.7 The JSON Switch 250 PTS
// Our form is working now! We're able to submit and see a response message from the server. We'd like to tweak this message a little bit, but since we're getting HTML back from the server, it wouldn't be easy. Luckily, we know that our server can also respond with a JSON version of this same response.

// Update our existing $.ajax call to make the request setting the dataType to json, and update the success callback to set the HTML of the .tour element to a message of your choice that uses the description, price, number of nights and confirmation number.

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('/book', {
      type: 'POST',
      data: $('form').serialize(),
      dataType: 'json',

      success: function(response) {
      	var msg = $("<p></p>");
      	msg.append("Description: " + response.description + ".\n");
      	msg.append("Price: " + response.price);
      	msg.append("Nights: " + response.nights);
      	msg.append("Confirmation: " + response.confirmation);

        $('.tour').html(msg);
      },
      contentType: 'application/json'
    });
  });
});



// 3.8 Don't Repeat Yourself 250 PTS
// Right now we're hardcoding the URL of the form action in two places - in the HTML of the form, and in our $.ajax call. Let's update our $.ajax call to use whatever URL the form specifies. Also, update the type of the ajax request to use the method attribute of the form.

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $.ajax($('form').attr('action'), {
      type: $('form').attr('method'),
      data: $('form').serialize(),
      dataType: 'json',
      success: function(response) {
        $('.tour').html('<p></p>')
                  .find('p')
                  .append('Trip to ' + response.description)
                  .append(' at $' + response.price)
                  .append(' for ' + response.nights + ' nights')
                  .append('. Confirmation: ' + response.confirmation);
      }
    });
  });
});

