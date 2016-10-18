/**
console.log("Hello World!");

var score = 10000;
var name = "Frango";
var highScore = 12000;

console.log(name + " your score is: " + score);

if (score > highScore) {
    console.log(name + " has the new high score of " + score + "!");
} else {
    console.log("You did not beat the high score!");
}

console.log(2 + 2);     //4
console.log("2" + 2);   //"22"
console.log(2 + "2");
console.log("2" * 2);   //ERROR? "22"? A: 4. Javascript inferred the intention.

var y;

console.log(y);         //undefined
console.log(y * 3);     //NaN

console.log(undefined);

y = null;

console.log(y);

y = undefined;

console.log(y);
**/

var title = document.getElementById('title');
title.innerHTML = "Stopwatch";

var timer = document.getElementById("timer");
var startBtn = document.getElementById("button");
var resetBtn = document.getElementById("resetBtn");
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
function updateTimer() {
    var dispMilli;
    var dispSec;
    var dispMin;
    if(milliseconds < 10) {
        dispMilli = "0" + milliseconds;
    } else {
        dispMilli = milliseconds;
    }
    if(seconds < 10) {
        dispSec= "0" + seconds;
    } else {
        dispSec = seconds;
    }
    if(minutes < 10) {
        dispMin = "0" + minutes;
    } else {
        dispMin = minutes;
    }
    timer.innerHTML = dispMin + ":" + dispSec + ":" + dispMilli;
}

var timerOn = false;
var startTimer;

function beginCount() {
    startTimer = setInterval(function(){
        timerOn = true;
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
        }
        updateTimer();
    }, 10);
}

button.addEventListener("click", function() {
    if(timerOn) {
        clearInterval(startTimer);
        timerOn = false;
        button.innerHTML = "Start";
    } else {
        beginCount();
        button.innerHTML = "Stop";
        }
});

resetBtn.addEventListener("click", function() {
    if(timerOn == false) {
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        updateTimer();
    }
});

var totalInp = document.getElementById("totalInp");
var tipInp = document.getElementById("tipInp")
var tipDisp = document.getElementById("tipDisp");

tipCalc.addEventListener("click", function() {
    calcTip(totalInp.value)});

function calcTip(spent) {
    console.log(spent);
    console.log("Calculating tip...");
    if (spent != "" && spent != undefined && spent != null) {
        console.log();
        tipDisp.innerHTML = "$" + (totalInp.value * (tipInp.value/100)).toFixed(2);
    }
}
