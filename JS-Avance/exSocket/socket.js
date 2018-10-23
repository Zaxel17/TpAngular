
var socket = new WebSocket("ws://192.168.110.38");
socket.onconnect(function(){
    console.log('je suis conecté')
})