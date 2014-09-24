// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key= AIzaSyCTycfGZRxyM6KUBkgcyuiC0Dvl1BTFUuI&part=snippet,contentDetails,statistics,status

var youtubeDataRequest = function(query){
  $.ajax({
    url: 'https://gdata.youtube.com/feeds/api/videos/'+ query +'?v=2&alt=json',
    success: function(data) {
      // present data to global variable for mapping out wanted data
      // object = data;
      var object = data;
      videoInfo = {'yt_id': object.entry.media$group.yt$videoid.$t,
                   'title': object.entry.title.$t,
                   'views': object.entry.yt$statistics.viewCount,
                   'thumbnail': object.entry.media$group.media$thumbnail[3].url }
    },
    error: function() {
      console.log('request failed')
      alert('something went wrong, please check with admin');

    }
  })
}
