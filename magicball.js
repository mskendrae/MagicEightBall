window.onload = function () {
   
var answers = [
  'Yes, but you\'re gonna need a stiff drink', 'No and Not EVER','Seriously?! You want that',
'Maybe and I mean MAYBE','Yes ummmmm Yes!'];


document.getElementById('answerBall').onclick = function () {
    var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('magic').innerHTML = answer;
};
};