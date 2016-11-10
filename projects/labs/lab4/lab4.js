$(document).ready(function() {
  $('#coverart').click(function() {
    $.ajax({
      url: "http://websys/lab4/lab4.json",
      success: function(data) {
        var body = $(document.body);
        body.find(".site").remove();
        var baseClone = $(body.find(".container")).clone();
        body.find(".container").remove();

        // create your header
        var song = $(document.createElement("p")).text(data.playlist.head.songNameHead);
        var artist = $(document.createElement("p")).text(data.playlist.head.artistHead);
        var albumName = $(document.createElement("p")).text(data.playlist.head.albumNameHead);
        var release = $(document.createElement("p")).text(data.playlist.head.releaseHead);
        var genre = $(document.createElement("p")).text(data.playlist.head.genreHead);
        var albumCover = $(document.createElement("p")).text(data.playlist.head.albumCoverHead);
        
        body.append(song, artist, albumName, release, genre, albumCover);

        for(i in data.playlist.songEntry) { // looping through the song entries
          var entry = data.playlist.songEntry[i];
          var clone = $(baseClone).clone(); // baseClone resets in every iteration

          // insert values into clone
          clone.find(".title").text(entry.songName);
          clone.find(".album").text(entry.albumName.title);
          clone.find(".site").attr("href", entry.artist.website);
          clone.find(".artist").text(entry.artist.name);
          clone.find(".albumName").attr({
              src: entry.albumName.image,
              title: entry.albumName.title
          });
          clone.find(".release").text(entry.releaseYear);
          clone.find(".genre").text(entry.genre);
          clone.find(".cover").attr({
              src: entry.albumCover.link,
              alt: entry.albumCover.alt
          });
          // insert clone into container
          body.append(clone);
        }
      }
    });
  });
});