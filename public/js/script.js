/* Author: Denys Pavlov <denys@dnka.ca>
*/

$(document).ready(function() {   

 // var socket = io.connect();

  $('#sender').bind('click', function() {
//    socket.emit('message', 'Message Sent on ' + new Date());     
    navigator.geolocation.getCurrentPosition(success, error);
  });

//  socket.on('server_message', function(data){
//   $('#receiver').append('<li>' + data + '</li>');  
//  });

  function success(position) {
    $.ajax( {
      type: 'POST',
      url: '/share',
      data: { latitude: position.coords.latitude,
              longitude: position.coords.longitude }
    });
  }

  function error(arg) {
    console.log(arg);
  }
});
