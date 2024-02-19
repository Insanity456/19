
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cookie, cookieImg
var score = 0
let clickPower = 1;
var cookieupgrade = 0
var cookieupImg



function preload() {
	cookieImg = loadImage("goodcookie.png")
	cookieupImg = loadImage("Upgrade.PNG")
}

function setup() {
	background(255, 255, 255);
	background("Gray");

	cookie = createSprite(200, 200, 100, 100)
	cookie.addImage(cookieImg)
	cookie.scale = 0.2

	cookieupgrade = createSprite(90, 350, 100, 100)
	cookieupgrade.addImage(cookieupImg)
	cookieupgrade.scale = 0.3

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(200)

	textSize(20);
	textAlign(CENTER);
	text(`Score/Cookie: ${score}`, width / 2, 30);
	text("press P, To Increase Click Power", 255, 80);
	text(`Click Power: ${clickPower}`, width / 2, 60);
	text(`Score Goes up based on the Click Power`, width / 2, 120);
	text(`The Score will go up by as much the Click power says`, width / 2, 100);
	text(`If click power is 2, `, width / 2, 280);
	text('pressing P will make Cookie increase numbure by 2',width /2, 300)





	drawSprites();

}



function keyPressed() {
	// Pressing 'P' key increases click power
	if (key === 'p' || key === 'P') {
	  clickPower++;
	}
  
	// Pressing SPACE key upgrades cookie
	if (keyCode === 32) { //space
	  if (score >= 3) { // Check if there are enough cookies to upgrade
		score += 3; 
		cookieupgrade++; // Increment cookie upgrade level
		if (cookieupgrade <= 5) { // Apply multiplier for the first 5 upgrades
		  clickPower = cookieupgrade + 1; // Set click power based on upgrade level
		}
	  }
	}
  }
  
  function mouseClicked() {
	if (cookie.overlapPoint(mouseX, mouseY)) {
	  score += clickPower; // Increment score based on click power
	}
  }