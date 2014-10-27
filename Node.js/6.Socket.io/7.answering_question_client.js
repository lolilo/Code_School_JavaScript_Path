// Answering Question Client
// 250Points
// Now on the client, listen for the 'answer' event and call the answerQuestion function, passing in both the question and the answer that was broadcasted from the server.


<script src="/socket.io/socket.io.js" />

<script>
  var server = io.connect('http://localhost:8080');

  server.on('question', function(question) {
    insertQuestion(question);
  });

  server.on('answer', function(question, answer) {
  	answerQuestion(question, answer);
  })
    
  //Don't worry about these methods, just assume 
  //they insert the correct html into the DOM
  // var insertQuestion = function(question) {
  // }

  // var answerQuestion = function(question, answer) {
  // }
</script>
