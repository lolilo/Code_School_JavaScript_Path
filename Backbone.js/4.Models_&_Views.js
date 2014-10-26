// CANCELLING AN APPOINTMENT
// 250
// Dr. Goodparts is pretty flaky and has been cancelling a lot of appointments lately. He's asked for an easy, one-click way to cancel an appointment in the app you are building.

// Add a link to the AppointmentView template that, when clicked, will set its model's cancelled attribute to true.

// Add a link to the template
var AppointmentView = Backbone.View.extend({
  template: _.template('<span><%= title %></span> <a href="#">x</a>'),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});
// Listen for the click event on the link
var AppointmentView = Backbone.View.extend({
  template: _.template('<span><%= title %></span> <a href="#">x</a>'),
  events:  { "click a": "" },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});

// add function
var AppointmentView = Backbone.View.extend({
  template: _.template('<span><%= title %></span> <a href="#">x</a>'),
  events:  { "click a": "cancel" },
  cancel: function(){
    this.model.set({cancelled: true});
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});


// update the view with each change

var AppointmentView = Backbone.View.extend({
  template: _.template('<span class="<% if(cancelled) print("cancelled") %>">' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),
  
  initialize: function(){
    this.model.on('change', this.render, this);
  },

  events:  { "click a": "cancel" },
  cancel: function(){
    this.model.cancel();
  },
  
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});








