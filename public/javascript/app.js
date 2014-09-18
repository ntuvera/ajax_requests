/*
$.ajax({
  url: 'http://www.colourlovers.com/api/palettes/new?format=json',
  success: function(data) {
    console.log(data)
  }
})
*/
// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key= AIzaSyCTycfGZRxyM6KUBkgcyuiC0Dvl1BTFUuI&part=snippet,contentDetails,statistics,status

var youtubeRequest = function(){
  var query = $('#target').val()
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos?id='+ query +'&key= AIzaSyCTycfGZRxyM6KUBkgcyuiC0Dvl1BTFUuI&part=snippet,contentDetails,statistics,status',
    success: function(data) {
      console.log(data);
      object = data;
      $('#content').empty();
      $('#content').text(object.items[0].statistics.viewCount + ' views');
      return data;
    }
  })
}
