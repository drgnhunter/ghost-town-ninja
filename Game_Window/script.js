var startSound = new Audio("Fun House - Coyote Hearing.mp3");
startSound.loop = true;

var buttonSound = new Audio("mixkit-bubble-pop-up-alert-notification-2357.wav");
buttonSound.loop = false;

function startMusic(){
   startSound.play();
}

function gameLevel(){
    
    window.location = "level_selection.html";
    
}

function gameLevelSound(){
    buttonSound.play();
}

function info(){
    buttonSound.play();
    window.location = "pc_index.html";   
}