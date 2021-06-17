var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  img = loadImage("treasure.jpg")
  sound = loadSound("win.mp3")

}

function setup() {
  createCanvas(1536, 752);
  sound.loop();
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 750, 50);
// add code for changing the background to the treasure background
   
  if(score === 3) {
    clear()
    background(img)
    fill("black");
    stroke(2)
    textSize(40);
    text("TREASURE UNLOCKED",600, 200);

  }

  drawSprites()
}