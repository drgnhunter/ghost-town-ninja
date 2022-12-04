var gameSound = new Audio("resources/Window Demons - roljui.mp3");
gameSound.loop = true;

var runSound = new Audio("resources/run.mp3");
runSound.loop = true;
var jumpSound = new Audio("resources/jump.mp3");
var score = 0;
var slideSound = new Audio("resources/slide.mp3");
slideSound.loop = false;

var deadAudio = new Audio("resources/dead.mp3");
var deadAudio2 = new Audio("resources/dead.mp3");
deadAudio2.loop = false;
var sliceAudio = new Audio("resources/slice.wav");
sliceAudio.loop = false;

var background = document.getElementById("background");

var backgroundX = 0;
var backgroundAnimationId = 0;

let once = false;

function gameAudio(){
    gameSound.play();
}

var ninja = document.getElementById("ninja");
ninja.src = "resources/Idle.gif";
function moveBackground() {

    backgroundX = backgroundX - 3;
    background.style.backgroundPositionX = backgroundX + "px";
}
//run
var runImageNumber = 0;
var runAnimationId = 0;
function ninjaRun() {
    var ninja = document.getElementById("ninja");
    score += 1;
  

    document.getElementById("score").innerHTML = "Score :" + score;
    document.getElementById("score2").innerHTML = "Score :" + score;
    if (runImageNumber == 10) {
        runImageNumber = 0;
    }

    ninja.src = "resources/Run/Run__00" + runImageNumber + ".png";
    runImageNumber++;
}

//jump
var jumpImageNumber = 0;
var jumpAnimationId = 0;
var ninjaMarginTop = 640;
function ninjaJump() {
    var ninja = document.getElementById("ninja");
    
    //score += 1;
    document.getElementById("score").innerHTML = "Score :" + score;
    document.getElementById("score2").innerHTML = "Score :" + score;
    if (jumpImageNumber <= 5) {
        ninjaMarginTop = ninjaMarginTop - 20;
        ninja.style.marginTop = ninjaMarginTop + "px";
    }
    if (jumpImageNumber > 5) {
        ninjaMarginTop = ninjaMarginTop + 20;
        ninja.style.marginTop = ninjaMarginTop + "px";
    }
    if (jumpImageNumber == 10) {
        jumpImageNumber = 0;
        clearInterval(jumpAnimationId);

        jumpAnimationId = 0;

        runAnimationId = setInterval(ninjaRun, 100);
        runSound.play();
        if (backgroundAnimationId == 0) {
            backgroundAnimationId = setInterval(moveBackground, 10);
            moveBoxAnimationId = setInterval(moveBoxes, 100);
            moveOctupusAnimationId = setInterval(moveOctupus, 100);
        }
    }


    ninja.src = "resources/Jump/Jump__00" + jumpImageNumber + ".png";
    jumpImageNumber++;
}

//attack
var attackAnimationId = 0;
var attackImageNumber = 0;

function ninjaAttack() {
    var ninja = document.getElementById("ninja");
    
    document.getElementById("score").innerHTML = "Score :"+score;
    document.getElementById("score2").innerHTML = "Score :"+score;

    if (attackImageNumber == 10) {
        attackImageNumber = 0;
        clearInterval(attackAnimationId);
        attackAnimationId = 0;

        runAnimationId = setInterval(ninjaRun, 100);
        runSound.play();


    }
    ninja.src = "resources/Attack/Attack__00" + attackImageNumber + ".png";
    attackImageNumber++;
}

var slideImageNumber = 0;
var slideAnimationId = 0;
function ninjaSlide() {
    var ninja = document.getElementById("ninja");
    
    document.getElementById("score").innerHTML = "Score :" + score;
    document.getElementById("score2").innerHTML = "Score :" + score;
    ninja.style.height = "200px";
  

    ninja.src = "resources/Slide/Slide__00" + slideImageNumber + ".png"
    slideImageNumber++;
    //alert("Slide Image No. is : "+slideImageNumber);

    if (slideImageNumber == 10) {
        slideImageNumber = 0;
        //clearInterval(slideAnimationId);
        // slideAnimationId = 0;

        //alert("Slide Animation Id is: "+slideAnimationId);
        //runAnimationId = setInterval(ninjaRun, 100);
        //runSound.play();
        // alert("Run Animation Id is: "+ runAnimationId);

    }
}

function keyCheck(event) {
    var k = event.which;
    //alert(k);
    //run
    if (k == 13) {
        if (backgroundAnimationId == 0) {
            backgroundAnimationId = setInterval(moveBackground, 10);

            if (runAnimationId == 0) {
                clearInterval(jumpAnimationId);
                jumpAnimationId = 0;
                clearInterval(attackAnimationId);
                attackAnimationId = 0;
                clearInterval(slideAnimationId);
                slideAnimationId = 0;

                runAnimationId = setInterval(ninjaRun, 100);
                runSound.play();

                createBoxes();
                moveBoxAnimationId = setInterval(moveBoxes, 100);
                createOctupus();
                moveOctupusAnimationId = setInterval(moveOctupus, 100);
                createBat();
                moveBatAnimationId = setInterval(moveBat, 100);
            }
        }

    }//jump
    if (k == 87) {

        if (jumpAnimationId == 0) {
            clearInterval(runAnimationId);
            runAnimationId = 0;
            runSound.pause();

            clearInterval(attackAnimationId);
            attackAnimationId = 0;
            sliceAudio.pause();

            clearInterval(slideAnimationId);
            slideAnimationId = 0;


            jumpAnimationId = setInterval(ninjaJump, 100);
            jumpSound.currentTime = 0;
            jumpSound.play();
            
            if (backgroundAnimationId == 0) {
                createBoxes();
            createOctupus();
            createBat();
                backgroundAnimationId = setInterval(moveBackground, 10);
                moveBoxAnimationId = setInterval(moveBoxes, 100);
                moveOctupusAnimationId = setInterval(moveOctupus, 100);
                moveBatAnimationId = setInterval(moveBat, 100);
            }

        }
    }//attack
    if (k == 81) {

        if (attackAnimationId == 0) {
            clearInterval(runAnimationId);
            runAnimationId = 0;
            runSound.pause();
            clearInterval(jumpAnimationId);
            jumpAnimationId = 0;
            jumpSound.pause();

            clearInterval(slideAnimationId);
            slideAnimationId = 0;

            attackAnimationId = setInterval(ninjaAttack, 100);
            sliceAudio.play();

          
            if (backgroundAnimationId == 0) {
                createBoxes();
                createOctupus();
                createBat();
                backgroundAnimationId = setInterval(moveBackground, 10);
                moveBoxAnimationId = setInterval(moveBoxes, 100);
                moveOctupusAnimationId = setInterval(moveOctupus, 100);
                moveBatAnimationId = setInterval(moveBat, 100);
            }

        }
    }
    //slide
    if (k == 83) {

        if (slideAnimationId == 0) {
            //alert("Slide Animation inside");
            slideAnimationId = setInterval(ninjaSlide, 100);
            slideSound.currentTime = 0;
            slideSound.play();

            clearInterval(runAnimationId);
            runAnimationId = 0;
            runSound.pause();

            clearInterval(jumpAnimationId);
            jumpAnimationId = 0;

            clearInterval(attackAnimationId);
            attackAnimationId = 0;

           
            if (backgroundAnimationId == 0) {
                createBoxes();
                createOctupus();
                createBat();
                backgroundAnimationId = setInterval(moveBackground, 10);
                moveBoxAnimationId = setInterval(moveBoxes, 100);
                moveOctupusAnimationId = setInterval(moveOctupus, 100);
                moveBatAnimationId = setInterval(moveBat, 100);
            }
        }
    }else if((k > 0) && backgroundAnimationId == 0){
        var ninja = document.getElementById("ninja");
        ninja.src = "resources/Idle.gif";
    }
}



var boxMarginLeft = 2000;
function createBoxes() {
    for (var i = 0; i < 25; i++) {
        var d = document.createElement("div");
        d.className = "box"
        d.id = "box" + i;
        d.style.marginLeft = boxMarginLeft + "px";
        boxMarginLeft += 2500;
        document.getElementById("background").appendChild(d);
    }
}
var moveBoxAnimationId = 0;
function moveBoxes() {
    for (var i = 0; i < 25; i++) {
        var d = document.getElementById("box" + i);
        var dCSS = getComputedStyle(d);
        var currentMarginLeft = dCSS.marginLeft;
        newMarginLeft = parseInt(currentMarginLeft) - 25;
        d.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft <= 70 & newMarginLeft >= -70) {

            if (ninjaMarginTop > 600) {
                //Ninja is Dead.
                ninjaDeadAnimationId = setInterval(ninjaDead, 100);
                deadAudio2.play();

                clearInterval(runAnimationId);
                runAnimationId = -1;
                runSound.pause();

                clearInterval(jumpAnimationId);
                jumpAnimationId = -1;
                jumpSound.pause();

                clearInterval(attackAnimationId);
                attackAnimationId = -1;
                sliceAudio.pause();

                clearInterval(slideAnimationId);
                slideAnimationId = -1;
                slideSound.pause();

                background.style.opacity = "1";
                clearInterval(backgroundAnimationId);
                backgroundAnimationId = -1;
                runAnimationId = -1;

                clearInterval(moveBoxAnimationId);
                moveBoxAnimationId = -1;
                
               setTimeout(deathFlameMessage, 1500);
               gameSound.pause();
                
            }

        }
    }
}

var ninjaDeadAnimationId = 0;
var ninjaDeadImageNumber = 0;

function ninjaDead() {
    var ninja = document.getElementById("ninja");

    ninjaDeadImageNumber++;
    if (ninjaDeadImageNumber == 10) {
        clearInterval(ninjaDeadAnimationId);
        ninjaDeadImageNumber = 9;
        ninja.style.marginTop = "640px";

        clearInterval(runAnimationId);
        runAnimationId = -1;
        clearInterval(jumpAnimationId);
        jumpAnimationId = -1;
        clearInterval(attackAnimationId);
        attackAnimationId = -1;
        clearInterval(backgroundAnimationId);
        backgroundAnimationId = -1;
        clearInterval(moveBoxAnimationId);
        moveBoxAnimationId = -1;
        clearInterval(moveOctupusAnimationId);
        moveOctupusAnimationId = -1;
    }

    ninja.src = "resources/Dead/Dead__00" + ninjaDeadImageNumber + ".png";

}

var octupusMarginLeft = 3000;
//Creation Of Octupuses
function createOctupus() {
    for (var i = 0; i < 10; i++) {
        var d = document.createElement("octupus");
        d.className = "octupus"
        d.id = "octupus" + i;
        d.style.marginLeft = octupusMarginLeft + "px";
        octupusMarginLeft += 3500;
        document.getElementById("background").appendChild(d);
    }
}
var moveOctupusAnimationId = 0;
function moveOctupus() {
    var j = 0;
    for (var i = 0; i < 10; i++) {
        var d = document.getElementById("octupus" + i);
        var dCSS = getComputedStyle(d);
        var currentMarginLeft = dCSS.marginLeft;
        newMarginLeft = parseInt(currentMarginLeft) - 10;
        d.style.marginLeft = newMarginLeft + "px";
        var octupusOpacity = dCSS.opacity;

        //Octupus Hitbox
        //Is Octo on the right side?( More than 110)
        if (newMarginLeft >= 120) {
            //do nothing

        }
        //Is Octo between 0 and 110 (0<newMarginLeft<110 )
        if (newMarginLeft > 0 && newMarginLeft < 120) {
            //Continous attacking
            if (attackAnimationId > 0) {
                //attackAnimationIdC = setInterval(ninjaAttackC, 200);
                d.style.opacity = "0";
                runSound.pause();


            } else if(attackAnimationId == 0 && octupusOpacity == 1){
                //Ninja is Dead.
                ninjaDeadAnimationId = setInterval(ninjaDead, 100);
                deadAudio2.play();

                clearInterval(runAnimationId);
                runAnimationId = -1;
                runSound.pause();

                clearInterval(jumpAnimationId);
                jumpAnimationId = -1;
                jumpSound.pause();

                clearInterval(attackAnimationId);
                attackAnimationId = -1;
                
                setTimeout(deathOctupusMessage, 1500);
               gameSound.pause();

            }

        }
        //Octo is in between -200 and 0      
        if (newMarginLeft < 0 && newMarginLeft < -200) {
            //Ninja is Dead.
            deadAudio.pause();
            runSound.play();


        }
        //Octo dissappeared (Less than -200)
        if (newMarginLeft <= -200) {
            //do nothing
           

        }



        ////////////////////////////////////////////////////
        /*    
        //Is Octo on the right side?
            if(newMarginLeft >= 110){
                alert("Octo is in the right");
            }
    
        //Is Octo between 0 and 110 (0<newMarginLeft<110 )
        if (newMarginLeft > 0 && newMarginLeft < 110) {
            alert("Octo is between 0 and 110");
            //Ninja is Dead.
            ninjaDeadAnimationId = setInterval(ninjaDead, 100);
            deadAudio.play();

            clearInterval(runAnimationId);
            runAnimationId = -1;
            runSound.pause();

            clearInterval(jumpAnimationId);
            jumpAnimationId = -1;
            jumpSound.pause();

            clearInterval(attackAnimationId);
            attackAnimationId = -1;

            clearInterval(backgroundAnimationId);
            runAnimationId = -1;

            clearInterval(moveBoxAnimationId);
            moveBoxAnimationId = -1;
        }

           //Octo is in between -200 and 0      
        if(newMarginLeft<0 && newMarginLeft<-200){
            alert("Octo is in between -200 and 0");
        }
          //Octo dissappeared (Less than -200)
        if(newMarginLeft < -200){
            alert("Octo just left the house");
        } 

        */


    }


}
var batMarginLeft = 4000;
//Creation Of Bats
function createBat() {
    for (var i = 0; i < 10; i++) {
        var d = document.createElement("bat");
        d.className = "bat"
        d.id = "bat" + i;
        d.style.marginLeft = octupusMarginLeft + "px";
        batMarginLeft += 4500;
        document.getElementById("background").appendChild(d);
    }
}

var moveBatAnimationId = 0;
function moveBat() {
    var j = 0;
    for (var i = 0; i < 10; i++) {
        var d = document.getElementById("bat" + i);
        var dCSS = getComputedStyle(d);
        var currentMarginLeft = dCSS.marginLeft;
        newMarginLeft = parseInt(currentMarginLeft) - 70;
        d.style.marginLeft = newMarginLeft + "px";
        
        var ninja = document.getElementById("ninja");
        var ninjaCSS = getComputedStyle(ninja);
        var ninjaCurrentMarginTop = ninjaCSS.marginTop;

        //Bat Hitbox
        //Is Bat on the right side?( More than 110)
        if (newMarginLeft >= 230) {
            //do nothing

        }
        if (newMarginLeft > 100 & newMarginLeft < 200) {
            //alert("Margin is in between 250 and 100");
            if (slideAnimationId > 0) {
                //attackAnimationIdC = setInterval(ninjaAttackC, 200);
                //d.style.opacity = "1";
                runSound.pause();
                //alert("Bat is Dead");

            } else {
                //Ninja is Dead.
                ninjaDeadAnimationId = setInterval(ninjaDead, 100);
                deadAudio.play();

                clearInterval(runAnimationId);
                runAnimationId = -1;
                runSound.pause();

                clearInterval(jumpAnimationId);
                jumpAnimationId = -1;
                jumpSound.pause();

                clearInterval(attackAnimationId);
                attackAnimationId = -1;
                sliceAudio.pause();

                clearInterval(slideAnimationId);
                slideAnimationId = -1;
                slideSound.pause();

                setTimeout(deathBatMessage, 1500);
               gameSound.pause();

            }
        }

        //Is Bat between 0 and 110 (0<newMarginLeft<110 )
        if (newMarginLeft > 0 && newMarginLeft < 120) {
            //alert("Margin is less than 200");
            //Continous attacking
            if (slideAnimationId > 0) {
                //attackAnimationIdC = setInterval(ninjaAttackC, 200);
                //d.style.opacity = "1";
                runSound.pause();
                //alert("Bat is Dead");

            }//alert(ninjaCurrentMarginTop);
            else {
                //Ninja is Dead.
                ninjaDeadAnimationId = setInterval(ninjaDead, 100);
                deadAudio.play();

                clearInterval(runAnimationId);
                runAnimationId = -1;
                runSound.pause();

                clearInterval(jumpAnimationId);
                jumpAnimationId = -1;
                jumpSound.pause();

                clearInterval(attackAnimationId);
                attackAnimationId = -1;
                sliceAudio.pause();

                clearInterval(slideAnimationId);
                slideAnimationId = -1;
                slideSound.pause();

                setTimeout(deathBatMessage, 1500);
               gameSound.pause();

            }
            if ((jumpAnimationId>0)){
                alert("He is inside");
                //Ninja is Dead.
                ninjaDeadAnimationId = setInterval(ninjaDead, 100);
                deadAudio.play();

                clearInterval(runAnimationId);
                runAnimationId = -1;
                runSound.pause();

                clearInterval(jumpAnimationId);
                jumpAnimationId = -1;
                jumpSound.pause();

                clearInterval(attackAnimationId);
                attackAnimationId = -1;
                sliceAudio.pause();

                clearInterval(slideAnimationId);
                slideAnimationId = -1;
                slideSound.pause();

                setTimeout(deathBatMessage, 1500);
               gameSound.pause();

            }
            

        }
        //Bat is in between -200 and 0      
        if (newMarginLeft < 0 && newMarginLeft < -200) {
            //Ninja is Dead.
            deadAudio.pause();
            runSound.play();
            


        }
        //Bat dissappeared (Less than -200)
        if (newMarginLeft <= -200) {
            //do nothing


        }

    }
} 

function deathFlameMessage(){
    window.location = "../Game_Death_Screens/flame_index.html";
}

function deathOctupusMessage(){
   window.location = "../Game_Death_Screens/octupus_index.html";
}

function deathBatMessage(){
   window.location = "../Game_Death_Screens/bat_index.html";
}

export {score};