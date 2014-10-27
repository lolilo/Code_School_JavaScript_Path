// Listening for Questions
// 250Points
// In our client below, listen for 'question' events from the server 
// and call the insertQuestion function whenever the event fires. The insertQuestion function is already created for you, and it's placed in its own file. It expects exactly one argument - the question.


<script src="/socket.io/socket.io.js" />
<script src="/insertQuestion.js" />

<script>
  var server = io.connect('http://localhost:8080');
  server.on('question', function(question){
  	insertQuestion(question);
  });
</script>

// ### in another file

var insertQuestion = function(question){
  var newQuestion = document.createElement('li');
  newQuestion.innerHTML = question;

  var questions = document.getElementsByTagName('ul')[0];
  return questions.appendChild(newQuestion);
}