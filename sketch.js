//declaring the variable
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,background, backgroundImage;
var groundSprite, ground;
var box1,box2,box3, box1Sprite, box2Sprite, box3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating preload function
function preload(){

	//loading Images here
	backgroundImage = loadImage("alienCity.jpg")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

//creating setup function
function setup() {

	//creating canvas
	createCanvas(800, 700);

	//make rect mode to center
	rectMode(CENTER);
	
    //creating sprite, adding Images and scaling
	packageSprite=createSprite(width/2, 150, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite = createSprite(width/2, 565, width/4, 20);
	box1Sprite.shapeColor = "red";
	
	box2Sprite = createSprite(300, 525, 20, 100);
	box2Sprite.shapeColor = "red";
	
	box3Sprite = createSprite(500, 525, 20, 100);
    box3Sprite.shapeColor = "red";


	

    //creating image
	engine = Engine.create();
	world = engine.world;

	//creating package body 
    packageBody = Bodies.rectangle(width/2 , 150 ,1,1, {restitution:0.8});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Creating a Ground
	ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
	World.add(world, ground);
	//console.log(ground.position);
	

	//creating background, adding Images and scaling
	background = createSprite(400, 350);
	background.addImage("background", backgroundImage);
	background.scale = 0.6;

	//creating red box
	box1 = Bodies.rectangle(width/2, 540,width/4,20,{isStatic:true});
	World.add(world,box1);

	box2 = Bodies.rectangle(300, 490,20,100,{isStatic:true});
	World.add(world,box2);

	box3 = Bodies.rectangle(500, 490,20,100,{isStatic:true});
	World.add(world,box3);

	

	//run the engine
	Engine.run(engine);
  
}

//creating draw function
function draw() {

  //make rect mode to center	
 

  //update the engine
  Engine.update(engine);

  

  

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

 

  groundSprite.y = ground.position.y;
  //console.log(ground.position.y);
  console.log(packageSprite.y);

  if(keyDown(RIGHT_ARROW)){
	helicopterSprite.x = helicopterSprite.x+1;  
	packageBody.position.x = packageBody.position.x+1;
}

 if(keyDown(LEFT_ARROW)){
	helicopterSprite.x = helicopterSprite.x-1;  
	packageBody.position.x = packageBody.position.x-1;
 }

  keyPressed();

  //making package depth and helicopter depth more than background depth
  background.depth = helicopterSprite.depth;
  helicopterSprite.depth = helicopterSprite.depth + 1;

  background.depth = packageSprite.depth;
  packageSprite.depth = packageSprite.depth + 1;

  box1Sprite.depth = helicopterSprite.depth;
  box2Sprite.depth = helicopterSprite.depth;
  box3Sprite.depth = helicopterSprite.depth;
  

  groundSprite.depth = helicopterSprite.depth;
  
  

  //draw the sprites
  drawSprites();
 
}

//creating key pressed function
function keyPressed() {

     //giving condition when key pressed down arrow key
     if (keyDown(DOWN_ARROW)) {
	 
	     Matter.Body.setStatic(packageBody, false);
	  
     }

}