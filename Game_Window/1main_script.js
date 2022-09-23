var closeSound = new Audio("mixkit-bubble-pop-up-alert-notification-2357.wav");
closeSound.loop = false;

var clickSound =  new Audio("mixkit-select-click-1109.wav");
clickSound.loop = false;

function enemyTypes(){
    window.location = "enemy_index.html";
}

function begining(){
    window.location = "index.html";
}

function cSound(){
    closeSound.play();
}

function btnSound(){
    clickSound.play();
}