$(document).ready(function() {
    //hide the quiz and summary when page loads
    $(".quiz").hide();
    $(".summary").hide();

    //set global variables
    var time = 5;
    var intervalId;
    var questionsRight = 0;
    var questionsWrong = 0;
    var unanswered = 0;

    // create click event function
    $(".start-button").click(function() {
        // hide the start button when it is pressed
        $(".start-button").hide();
        // show the quiz when the start button is pressed
        $(".quiz").show();
        // run the run function
        run ();
    });

    // define run function
    function run () {
        // sets the variable intervalId to the setInterval with the paramets to run the decrement function every 1 sec (1000 milliseconds)
        intervalId = setInterval(decrement, 1000);
    }

    // define stop function
    function stop () {
        // stop the timer
        clearInterval(intervalId);
    }

    // create decrement function
    function decrement () {
        // decrease the time set by the parameter in the setInterval
        time--;
        // display the timer on the page
        $("#timer").text("Time left: " + time);
        // if time hits zero display
        if(time === 0) {
            // hide the quiz
            $(".quiz").hide();
            // hide the timer
            $("#timer").hide();
            // show the summary
            $(".summary").show();
            // run the stop function
            stop();
            // run the check Correct function
            checkCorrect ();
        }
    };

    function checkCorrect () {
        // select the input
        // go through each of the answers to see if they are marked
        // $(".answers").each(function(){
            if($("input").prop("checked")) {
        //     // compare the user input to the correct answer.
                if($("input").hasClass("correct")) {
                    questionsRight++;
                    $("#q-right").append(questionsRight);
                }
                else {
        //             // if not then mark as wrong
                    questionsWrong++;
                    $("#q-wrong").append(questionsWrong);
                } 
            }
            // if no input is marked, display as unanswered.
             else {
                unanswered++;
                $("#q-unanswered").append(unanswered);
            }
    }
    

});