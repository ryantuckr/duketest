var wins = 0;
var losses = 0;
var targetScore = 0;
var currentScore=0;
var picValue =[];
var duke = new Audio("assets/dukeFightSong.mp3");
var homer = new Audio("assets/homer.mp3")

function comPick(){
    targetScore = Math.floor(Math.random()*101)+19;
    $("#randomNumber").html(targetScore);
    $("#myScore").text(currentScore)
};
comPick()
console.log(targetScore)

function pick(){
    while (picValue.length < 4 ) {
    var n = Math.floor(Math.random()*11)+2;
    if (picValue.indexOf(n) === -1){
        picValue.push(n);
    };
    $(".chris").attr("data-value",picValue[0]);
    $(".jj").attr("data-value", picValue[1]);
    $(".grant").attr("data-value",picValue[2]);
    $(".zion").attr("data-value",picValue[3]);
    }
}
pick()
console.log(picValue);

$(".pic").on("click", function (){
    var picNumber = ($(this).attr("data-value"));
    picNumber = parseInt(picNumber)
    currentScore += picNumber
    console.log(currentScore)

    $("#myScore").text(currentScore)

    if (targetScore === currentScore){
        $("#alert").html("Winner Winner Chicken Dinner!")
        win()
    }else if (targetScore < currentScore){
        $("#alert").html("You lost with a Score of " + currentScore)
        loss()
    }
});

function win(){
wins++;
$(".wins").text(wins);
currentScore = 0;
picValue=[];
comPick()
pick()
duke.play()
};

function loss(){
losses++;
$(".losses").text(losses);
currentScore = 0;
picValue=[];
comPick()
pick()
homer.play()
};
