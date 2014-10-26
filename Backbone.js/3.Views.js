// Change the AppointmentView to have a top-level li tag (instead of the default div tag).

var AppointmentView = Backbone.View.extend({tagName: 'li'});

// ADDING A CLASS
// Make sure every AppointmentView top-level element is created with a class of appointment.

var AppointmentView = Backbone.View.extend({
  tagName: 'li',
  className: "appointment"
});


// TOP-LEVEL JQUERY
// Refactor the render function below to use the improved jQuery syntax on the top-level element.


var AppointmentView = Backbone.View.extend({
  render: function(){
    $(this.el).html('<li>' + this.model.get('title') + '</li>');
  }
});


var AppointmentView = Backbone.View.extend({
  render: function(){
    this.$el.html('<li>' + this.model.get('title') + '</li>');
  }
});

// USING A TEMPLATE
// Dr. Goodparts is getting ready to request some big changes to our AppointmentView. You know that eventually the HTML it generates is going to get pretty complicated, so now is probably a good time to refactor to use a template.

// Make sure you generate the same HTML after switching to templates.

// Tip: don't forget to use this.model.toJSON() in render

var AppointmentView = Backbone.View.extend({
  
  render: function(){
    this.$el.html('<span>' + this.model.get('title') + '</span>');
  }
});
// #####
var AppointmentView = Backbone.View.extend({
  
  template: _.template('<span> <%= title %></span>'),
  render: function(){
  	var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  }
});


// A VIEW EVENT
// 250
// Dr. Goodparts is just getting the hang of this web thing and thinks it'd be a good idea to alert the user the title of the appointment whenever they click on its view.

// See if you can't appease his bad idea and implement this tragic UI interaction using View events.



var AppointmentView = Backbone.View.extend({

  template: _.template('<span><%= title %></span>'),
  
  events: {
    "click span": "alertStatus"
  },
	
  alertStatus: function(e) {
  	alert(this.model.get('title'));
  },
  
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});












