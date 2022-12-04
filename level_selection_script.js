var levelSound = new Audio("mixkit-wolf-howling-1775.wav");
levelSound.loop = false;

var clickSound =  new Audio("mixkit-select-click-1109.wav");
clickSound.loop = false;

function level1(){
  window.location = "Game_Level/index.html";
}

function b(){
    window.location = "index.html";
}

function level1Sound(){
  levelSound.play();
  levelSound.currentTime = 0;
}

function btnSound(){
  clickSound.play();
  levelSound.pause();
}