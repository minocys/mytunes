// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(songs){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.shift();
      if(this.length > 0){
        this.playFirst();
      }
    });

    this.on('dequeue', function(){
      this.remove();
    })

  },

  playFirst: function(){
    this.at(0).play();
  },

});