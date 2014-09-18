/*
$.ajax({
  url: 'http://www.colourlovers.com/api/palettes/new?format=json',
  success: function(data) {
    console.log(data)
  }
})
*/

var test =
$.ajax({
  url: 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key= AIzaSyCTycfGZRxyM6KUBkgcyuiC0Dvl1BTFUuI&part=snippet,contentDetails,statistics,status',
  success: function(data) {
    console.log(data)
  }
})
