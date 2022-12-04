var closeSound = new Audio("mixkit-bubble-pop-up-alert-notification-2357.wav");
closeSound.loop = false;

var clickSound =  new Audio("mixkit-select-click-1109.wav");
clickSound.loop = false;


function begining(){
    window.location = "index.html";
}

function previous(){
    window.location = "pc_index.html";
}

function next(){
    window.location = "guide_index.html";
}

function cSound(){
    closeSound.play();
}

function btnSound(){
    clickSound.play();
}