var AppRouter = Backbone.Router.extend({
	routes: { "appointments/:id" : "show" },
	show: function(id){
    console.log("heyo we're in show with id %d", id); 
  }
});


var router = new AppRouter();
router.navigate("appointments/1", {
  trigger: true
});





// IMPLEMENTING SHOW
// 250
// Time to implement the show action. As you can see you've already created an instance of the Appointment and passed in the id from the URL.

// You'll want to create an instance of the AppointmentView, render it, and replace the contents of #app with its top-level element.

// Lastly, don't forget to fetch data from the server for the appointment.

var AppRouter = Backbone.Router.extend({
  routes: { "appointments/:id": "show" },
  show: function(id){
    var appointment = new Appointment({id: id});
    var appointmentView = new AppointmentView({model: appointment});
    var temp = appointmentView.render().el;
    $("#app").html(temp);
    appointment.fetch();
   
  }
});

// ################
var AppRouter = Backbone.Router.extend({
  routes: { "": "index", 
           "appointments/:id": "show" },

  initialize: function(options){
    this.appointmentList = options.appointmentList;
  },
  
  index: function(){
    this.appointmentList.fetch();
    var appointmentsView = new AppointmentListView({collection: this.appointmentList});
	appointmentsView.render()
    $('#app').html(appointmentsView.el); // gotta check source code to see how the function works, what is being returned. Derp.
  },

  show: function(id){
    var appointment = new Appointment({id: id});
    var appointmentView = new AppointmentView({model: appointment});
    appointmentView.render(); 
    $('#app').html(appointmentView.el);
    appointment.fetch();
  }
});

