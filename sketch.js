var database = firebase.database().ref();

function setup() {
    createCanvas(800, 800);
    resetSketch();
    background('black');
    img = loadImage("images/invader.png");
    for (var i = 0; i < 10; i++) { //number of invaders
        alienObject[i] = new alien(i * 80 + 10, 60);// does the spacing and levels 
        alienObject[i + 10] = new alien(i * 80 + 10, 100);
        alienObject[i + 20] = new alien(i * 80 + 10, 140);

    }

}
var x = 350;   // declaring 
var y = 740;
var w = 5;
var h = 10;
var alienObject = [];
var Projectile = [];
var screen = 0;
var score = 0;
var lives = 3;

var button = createButton("reset");  // reset button 
// function updateDB(name) {
//     console.log(name + " : " + score);
//     var data = {
//         NAME: name,
//         SCORE: score
//     }

function draw() {
    strokeWeight(0);
    fill('#00ff50'); //color of ship
    background('black'); // fix for the multiple rects forming
    rect(x + 30, 740, 15, 15);//top base
    rect(x, 750, 75, 30);//base 
    // button.mousePressed(resetSketch);
    

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        x = x - 10;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        x = x + 10;
    }

    if (x < 0) {
        x = 0;
    }
    if (x > 725) {
        x = 725;
    }
    for (i = 0; i < Projectile.length; i++) {
        fill('red');
        rect(Projectile[i].x, Projectile[i].y, w, h);
        Projectile[i].y = Projectile[i].y - 5;
        for (var j = 0; j < alienObject.length; j++) {
            if (Projectile[i].strike(alienObject[j])) { //removing the objects 

                //check to see if the alien array is empty?
                    //if it is we need to refresh it of sorts
                    //or go to another level
                alienObject.splice(j, 1);
                Projectile[i].delete = true;
                if (Projectile[i].delete = true) {
                    score = score + 10;
                }
            }
            
        }
        
    }
       if (alienObject.length == 0) {  // You won screen
            fill(255);
            strokeWeight(10);
            stroke('Green');
            textSize(50);
            text("Congratulations, You Won !!!", 54.5, 362.5);
        }

    for (var i = Projectile.length - 1; i >= 0; i--) {
        if (Projectile[i].delete) {
            Projectile.splice(i, 1);
        }
    }



    for (var i = 0; i < alienObject.length; i++) {
        alienObject[i].draw();
        alienObject[i].refresh();


        // enter screen 
        if (screen == 0) {
            background('black');
            fill('white');
            strokeWeight(10);
            stroke('blue');
            textSize(100);
            text('Space Invaders!', 50, 400);
            strokeWeight(5);
            textSize(50);
            text('Click anywhere to begin', 150, 500);
        }

        //user information on top
        fill('black');
        stroke('red');
        strokeWeight(1);
        rect(50, 0, 700, 50);
        fill(255);
        textSize(20);
        text('Score: ' + score, 60, 20);
        text('Lives: ' + lives, 600, 20);

        //instructions
        fill('red');
        textSize(15);
        text('Right Arrow & "D" key:', 50, 795);
        text('Left Arrow & "A" key:', 310, 795);
        text('Spacebar:', 550, 795);
        fill('white');
        text('Moves Right', 205, 795);
        text('Moves Left', 455, 795);
        text('Shoot', 625, 795)

     
    }
}

function mouseClicked() {
    screen = 1;
}

// temp for postioning to full screen
function mousePressed() {
    console.log("The mouse is at this x :" + mouseX + ".");
    console.log("The mouse is at this y :" + mouseY + ".");
}

function alien(xC, yC, ) {   // the aliens and the size
    this.xC = xC;
    this.yC = yC;
    this.xMove = 2;
    this.yMove = 0.3;  // speed of the movement
    this.draw = function () {
        image(img, this.xC, this.yC, 46, 46);
    }
    this.refresh = function () { //movement of invaders
        this.xC += this.xMove;
        this.yC += this.yMove;
        for (var i = 0; i < alienObject.length; i++) {
            if (alienObject[i].xC > 765) { // boundry of aliens postions 
                this.xMove = -1.5;
            }
            if (alienObject[i].xC < 0) {
                this.xMove = 1.5;

            }
        }
    }
}

function projectile1(x, y, width, height) {
    this.x = x + 35;
    this.y = y;
    this.delete = false;
    this.width = w;
    this.height = h;
    this.strike = function (alien) {  //collision detection
        var d = dist(this.x, this.y, alien.xC, alien.yC);
        if (d < 50) {
            return true;
        } else {
            return false;
        }
    }
}

// if (d < 50) {
//     score = score + 10;

// }

function resetSketch(){
function keyPressed() {
    if (keyCode === 116) {
     
        }
    }
}




function keyPressed() {
    if (keyCode === 32) {
        Projectile.push(new projectile1(x, y - 5, w, h));

    }

    function keyPressed() {
        background('black')
        rect(x, x - 30, 15, 20);//projectile 
        if (keyCode === LEFT_ARROW) {
            x = x - 20;
        }
        if (keyCode === RIGHT_ARROW) {
            x = x + 20;
        }
    }
}

