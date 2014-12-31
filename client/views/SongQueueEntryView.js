// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName:'div',  //sets default tag of this object
  id:'song-entry', //sets id tag 

  //template creates wrapper function for applying attributes later
  template : _.template('<div class="song-title"><%=title%></div><div class="song-artist"><%=artist%></div>'),

  render:function(){
    return this.$el.html(this.template(this.model.attributes));
  }


});
