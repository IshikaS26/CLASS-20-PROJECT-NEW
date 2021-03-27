var bg , bgimg ;
var cat , catimg1 , catimg2 ;
var mouse , mouseimg1 , mouseimg2 ;
var mouseimg4 , catimg4 ; 



function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png" ,"images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    catimg4 = loadAnimation("images/cat4.png");
    mouseimg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(600,600);
    cat.scale=0.2;
    cat.addAnimation("catSit",catimg1);
    mouse = createSprite(200,600);
    mouse.addAnimation("mousesit",mouseimg1);
    mouse.scale=0.2;

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat2",catimg4);
        mouse.addAnimation("mouse2",mouseimg4);
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouse1",mouseimg2)
    }

    if (keyCode === RIGHT_ARROW){
        
        cat.changeAnimation("catRunning");
        cat.velocityX = -2 ;
        cat.addAnimation("catRunning",catimg2);
    }


}
