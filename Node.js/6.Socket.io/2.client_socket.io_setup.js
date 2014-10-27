// Client socket.io setup
// 250Points
// In our html file, load the socket.io.js script and then use io.connect to connect to socket.io on the server. Connect to the server at http://localhost:8080.
// Tip: the socket.io.js path you should use is 
// /socket.io/socket.io.js. 
// Express knows to serve the socket.io client js for this path.


<script>
  // use the socket.io server to connect to localhost:8080 here
</script>


<script src='/socket.io/socket.io.js'></script>
<script>
  var server = io.connect('http://localhost:8080');
</script>
