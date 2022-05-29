// Audio after submit click
let woo = new Audio()
woo.src = "./sound/woo.mp3"

// Function to change questions in current quiz
function quizPlay() {
    woo.play()
    if ($("#quizanswer").val() != '') {
        $("#error").css("opacity", "0");
       answer = ($("#quizanswer").val());
       $("#qu" + $("#questcount").val()).val(answer);
       $("#questcount").val(parseInt($("#questcount").val()) + 1);
       if ($("#questcount").val() == 2){

           // Change question
           $("#questuiontext").text("Okay, do you know Van Darkholme?");
           $("#questnum").text("Remaining questions 4/5");


    } else if ($("#questcount").val() == 3) {


           $("#questuiontext").text("In which gym did Van Darkholme fight?");
           $("#questnum").text("Remaining questions 3/5");


    } else if ($("#questcount").val() == 4) {


           $("#questuiontext").text("Does Mukan look like Van Darkholme?");
           $("#questnum").text("Remaining questions 2/5");


    } else if ($("#questcount").val() == 5) {


           $("#questuiontext").text("Was Billy Herrington popular in Japan?");
           $("#questnum").text("Remaining questions 1/5");


    } else if ($("#questcount").val() == 6) {
           $("#questuiontext").text("Thank you for your responses!");
           $("#questnum").text("Remaining questions 0/5");
           $("#quizbtn").text("Full back");


           $("#quizanswer").css("display", "none");
           $("#error").css("display", "none");
           $("#quizbtn").attr("onclick", "");
           $("#quizform").submit();
           setTimeout(() => {
               $("#quizbtn").attr("href", "./index.php");
            }, 300);

        
    }
    $("#quizanswer").val('');
    $("#quizanswer").focus();
    } else {
        $("#error").css("opacity", "1");
        $("#quizanswer").focus();
    }

    
}
// Function processes the received information from current quiz and sends it to the bot
function php() {
    $("#quizform").submit(function(e) {
        
        e.preventDefault();
        // Send result of the quiz to php file
        $.ajax({
            url: './quizform.php',
            type: 'POST',
            data: $(this).serialize(),

            success: function (s) {
            }
        });
    });
}