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
