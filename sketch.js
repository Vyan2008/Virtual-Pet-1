//Create variables here
var dog,happyDog, foodS, foodStock, database;
function preload()
{
  //load images here
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  var doggy = createSprite(250,250,100,100);
  doggy.addImage(dog);
  foodstock = database.ref('Food');
  foodstock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  doggy.addImage(happyDog);
}
  drawSprites();
  //add styles here
  textSize(10);
  fill("blue");
  stroke("green");
  text("Food Remaining="+foodS,250,250);

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}




