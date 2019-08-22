
function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
	var correct = 0;


	if (question1 == "sky") {
		correct++;
  }
	if (question2 == "adjective") {
		correct++;
  }
	if (question3 == "noun") {
		correct++;
  }
    if (question4 == "exclamation point") {
      correct++;
    }
    if (question5 == "noun") {
      correct++;
    }
    if (question6 == "big") {
      correct++;
    }
      if (question7 == "jordan") {
    		correct++;

	}


	document.getElementById("after_submit").style.visibility = "visible";

	// document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	// document.getElementById("picture").src = pictures[score];
	}
