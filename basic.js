function check(question, word) {
  if (question == word) {
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("after_submit").innerHTML = "That is correct!";
  }
  else {
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("after_submit").innerHTML = "That is incorrect!";

  }

  function check(){
  	var question1 = document.quiz.question1.value;
  	var question2 = document.quiz.question2.value;
  	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
  	var correct = 0;


  	if (question1 == "hello") {
  		correct++;
    }
  	if (question2 == "yes") {
  		correct++;
    }
  	if (question3 == "no") {
  		correct++;
    }
      if (question4 == "see") {
        correct++;
      }
      if (question5 == "me") {
        correct++;
      }
      if (question6 == "please") {
        correct++;
      }
        if (question7 == "people") {
      		correct++;
      }
      	if (question8 == "time") {
      		correct++;
      }
      	if (question9 == "woman") {
      		correct++;

        }
        	if (question10 == "man") {
        		correct++;

  	}
    //
  	// var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
  	// var messages = ["Great job!", "You did good! Try doing better.", "Try again."];
  	// var score;
    //
  	// if (correct == 2) {
  	// 	score = 0;
  	// }
    //
  	// if (correct > 0 && correct < 10) {
  	// 	score = 1;
  	// }
    //
  	// if (correct == 10) {
  	// 	score = 0;
  	// }

  	document.getElementById("after_submit").style.visibility = "visible";

  	// document.getElementById("message").innerHTML = messages[score];
  	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  	// document.getElementById("picture").src = pictures[score];
  	}

}
