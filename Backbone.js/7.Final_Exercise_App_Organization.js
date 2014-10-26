/*APP ORGANIZATION
We are so close to wrapping up! Before we go, let's use our Router to clean up our app a bit.

First, instead of assigning a Router class to AppRouter, just create the Router instance.

Next, instead of passing in the appointmentList collection in initialize, create an instance of AppointmentList and assign it to this.appointmentList.

Add a start function to the router to start our Backbone history with pushState on.

Finally, call the router's start function from inside a jQuery ready function to ensure we don't start updating the DOM before it's ready.
*/

var AppRouter = new (Backbone.Router.extend({
  routes: { "appointments/:id": "show", "": "index" },

  initialize: function(){
    this.appointmentList = new AppointmentList();
  },

  start: function() {
    Backbone.history.start( {pushState: true} );
  },

  index: function(){
    var appointmentsView = new AppointmentListView({collection: this.appointmentList});
    appointmentsView.render();
    $('#app').html(appointmentsView.el);
    this.appointmentList.fetch();
  },

  show: function(id){
    var appointment = new Appointment({id: id});
    var appointmentView = new AppointmentView({model: appointment});
    appointmentView.render();
    $('#app').html(appointmentView.el);
    appointment.fetch();
  }
}));

$(function() { AppRouter.start() });
