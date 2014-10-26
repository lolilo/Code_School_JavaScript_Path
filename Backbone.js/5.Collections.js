
// LISTEN FOR AN ADD
// 250
// Dr. Goodparts has been adding models to the collection willy-nilly and you'd like to know when he does.

// Use an event listener to log to the console the model's title anytime a model is added to the appointments collection.

var appointments = new AppointmentList();
appointments.on('add', function(appointment) {
	console.log(appointment.get('title'));
});



// ITERATION
// 250
// There are a lot of appointments in our collection and Dr. Goodparts wants a list of all appointment titles so he can arrange his equipment for the day.

// Use the map iteration function to return an array of appointment titles and assign to the titles variable.


var titles = appointments.map(function(app_item) {
	return app_item.get('title');
});

