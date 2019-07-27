var playing = false;
var score;
var action;                                                                                //if we click on start/reset
var timeremaining;
var correctAnswer;
document.getElementById("startReset").onclick = function() {
                                                                                // if we are playing
    if(playing == true){
        location.reload();                                                      // reload page
           
    }else{                                                                      // if we are not playing
        playing = true;                                                         // Enter playing mode
        score = 0;                                                              // set score to 0
        document.getElementById("scoreValue").innerHTML = score;
        show("timeRemaining");                                                  // show countdown box
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        hide("gameOver");
        document.getElementById("startReset").innerHTML = "Reset Game";         //  change button to reset
        startCountdown();                                                       // start Countdown
        generateQA();
    }
}
for(var j=1;j<5;j++){
    document.getElementById("box"+j).onclick= function(){
    if (playing == true){                                                       //check if playing 
        if(this.innerHTML == correctAnswer){
        score++;                                                                //score +1
        document.getElementById("scoreValue").innerHTML = score;                
        hide("tryAgain");
        show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generateQA();

        }else{
                hide("correct");
        show("tryAgain");
            setTimeout(function(){
                hide("tryAgain");
            },1000);

        }
    }
}
     

}
   
 
    
//if we click on answer box
        //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for one second
                //generate new Q and answer
            //no
                //show try again box for 1 sec
//function

function startCountdown(){                                  //Start cout down
    action = setInterval(function(){
                         timeremaining -= 1;
                         document.getElementById("timeremainingvalue").innerHTML = timeremaining;
                        if(timeremaining == 0){                                    //game over
                            stopCountdown();
                            show("gameOver");
                            document.getElementById("gameOver").innerHTML ="<p>Game over!</p> <p> Your score is " +score+ ".  </p>";
                            hide("timeRemaining");
                            hide("correct");
                            hide("tryAgain");
                            playing = false;
                            document.getElementById("startReset").innerHTML ="Start Game";
                        }
                         }, 1000);
}
function stopCountdown(){                                                                                //Stop count down
clearInterval(action);
}
function hide(Id){                                                                                       //Hide an element
    document.getElementById(Id).style.display ="none";
}

function show(Id){                                                                                       //Show an element
    document.getElementById(Id).style.display ="block";
}
function generateQA(){
    var x= 1 + Math.round(9*Math.random());
    var y= 1 + Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "X" +y;
    var correctPosition = 1 + Math.round(3*Math.random());                                              //generate correct position 
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;                           // fill one box with correct answer
   var answers = [correctAnswer]                                                                        //array of all options
    for(var i=1;i<5;i++){                                                                                   //generate wrong answer and fill in other boxes
    if(i != correctPosition){
        var wrongAnswer;
        do{wrongAnswer= (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));}          //wrong answer
        while(answers.indexOf(wrongAnswer)>-1)                                                            //check if wrong answer is equal to right answer 
        document.getElementById("box"+i).innerHTML = wrongAnswer;                                  // fill wrong answer in some box
        answers.push(wrongAnswer);
    }
    }                                                                                                    
    
    
    
    
    
    
    
}