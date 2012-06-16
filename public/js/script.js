/* Author: Denys Pavlov <denys@dnka.ca>
*/

$(document).ready(function() {   

  var socket = io.connect();
  var watchID;

  if ("geolocation" in navigator) {
    watchID = navigator.geolocation.watchPosition(success, error);
  } else {
    $('body').text('no location supported');
  }

  socket.on('ack', function(data){
   $('#receiver').append('<li>' + data + '</li>');  
  });

  function success(position) {
    console.log(position);
    socket.emit('share', 
      { latitude: position.coords.latitude,
        longitude: position.coords.longitude });
//    $.ajax( {
//      type: 'POST',
//      url: '/share',
//      data: { latitude: position.coords.latitude,
//              longitude: position.coords.longitude }
//    });
  }

  function error(arg) {
    navigator.geolocation.clearWatch(watchID);
    console.log(arg);
  }
});
