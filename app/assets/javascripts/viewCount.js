// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key= AIzaSyCTycfGZRxyM6KUBkgcyuiC0Dvl1BTFUuI&part=snippet,contentDetails,statistics,status

var youtubeRequest = function(){
  var query = $('#target').val()
  $.ajax({
    url: 'https://gdata.youtube.com/feeds/api/videos/'+ query +'?v=2&alt=json',
    success: function(data) {
      var object = data;
      if (object.entry.yt$statistics.viewCount === undefined) {
       $('#content').empty().text('something went wrong -- invalid Video ID');
      } else {
      $('#content').empty().text(object.entry.yt$stastics.viewCount + ' views');
      }
    },
    error: function() {
      console.log('request failed')
      $('#content').empty().text('something went wrong, please check with admin');

    }
  })
}
