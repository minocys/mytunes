// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  template: _.template('<div class="my-queue">Queue<div>'),

  initialize: function() {
    var songQueue = this;
    this.collection.on('add', function(){
      songQueue.render();
    });

    this.collection.on('remove', function(){
      songQueue.render();
    });

  },

  render: function() {
    //append songqueue (this.model) to view
    //for each itme in this.model
    this.$el.children().remove();

    return this.$el.html(this.template())
               .append(this.collection.map(function(item){
                  var newEntry = new SongQueueEntryView({model: item});
                  return newEntry.render();
                }));
  }

});
