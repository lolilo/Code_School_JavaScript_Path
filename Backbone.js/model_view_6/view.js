var AppointmentView = Backbone.View.extend({
  template: _.template('<span class="<%= if(cancelled) print("cancelled") %>">' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),
  
 
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
 
 
var AppointmentListView = Backbone.View.extend({
  render: function(){
    this.collection.forEach(this.addOne, this);
    return this;
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});