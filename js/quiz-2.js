// Audio after submit click
let yes = new Audio()
yes.src = "./sound/oh-yes-sir.mp3"

// Function to change questions in current quiz
function quizPlay() {
    yes.play()
    if ($("#quizanswer").val() != '') {
        $("#error").css("opacity", "0");
       answer = ($("#quizanswer").val());
       $("#qu" + $("#questcount").val()).val(answer);
       $("#questcount").val(parseInt($("#questcount").val()) + 1);
       if ($("#questcount").val() == 2){

           // Change question
           $("#questuiontext").text("This famous business magnate who recently became the richest man in the world named his child " +
            "‘X Æ A-Xii’ which led to funny reactions all over the world. Who is this famous person?");
           $("#questnum").text("Remaining questions 4/5");


    } else if ($("#questcount").val() == 3) {

           $("#questuiontext").text("There were a lot of memes made with this viral game " +
               "that gained immense popularity among the masses in 2020. What is the name of this game?");
           $("#questnum").text("Remaining questions 3/5");


    } else if ($("#questcount").val() == 4) {


           $("#questuiontext").text("Which were the blink and miss structures that " +
               "popped up around the world mysteriously that gave rise to various memes?");
           $("#questnum").text("Remaining questions 2/5");


    } else if ($("#questcount").val() == 5) {


           $("#questuiontext").text("In 2020, there were a lot of Baby Yoda memes. " +
               "Baby Yoda was also named as the Most Adorable Creature of 2020. Where does Yoda appear originally?");
           $("#questnum").text("Remaining questions 1/5");


    } else if ($("#questcount").val() == 6) {
           $("#questuiontext").text("Thank you for your responses!");
           $("#questnum").text("Remaining questions 0/5");
           $("#quizbtn").text("Back");

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