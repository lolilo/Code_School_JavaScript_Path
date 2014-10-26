// RENDER THE COLLECTION
// 250
// Good morning. Last night you were so close to implementing the render function on AppointmentListView but decided to take a nap, and here you are!

// Go ahead and implement the addOne function, rendering an AppointmentView for each model in the collection, and appending it to the collection view's top-level element.

// Note There is a bug in the forEach call. Make sure and fix it before submitting.

var AppointmentListView = Backbone.View.extend({
  render: function(){
    this.collection.forEach(this.addOne, this); // was missing 'this' parameter
  },
  addOne: function(model){
    var appointmentView = new AppointmentView( {model: model} );
    this.$el.append(appointmentView.render().el);
    
  }
});


// INTO THE DOM
// 250
// Wow, you are a hard worker! Let's see it pay off by rendering our collection view and inserting it into the DOM. Using the append or html jQuery methods, insert the top-level element into the #app div.

var appointmentsView = new AppointmentListView({collection: appointmentList});
var temp = appointmentsView.render().el;

$('#app').html(temp);


// ########

var AppointmentListView = Backbone.View.extend({
  initialize: function(){
	this.collection.on('add', this.addOne, this); // Make sure you include the context argument to ensure addOne is called with the correct context.
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});
    appointmentView.render();
    this.$el.append(appointmentView.el);
  }
});

// RESET ALL THE THINGS
// 250
// It's Monday morning and time to reset all the appointments for the week. You hear a screech from down the hall and seconds later Dr. Goodparts barges red-faced into your office because the DOM didn't update when he reset the collection.

// Update the AppointmentListView to listen for the collection's reset event to call the render function.

// Make sure you include the context argument to ensure render is called with the correct context.



var AppointmentListView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.render, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
    
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});
    appointmentView.render();
    this.$el.append(appointmentView.el);
  }
});
