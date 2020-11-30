var dog, happyDog, database, foodS, foodStock


function preload()
{
	dogImg = loadImage('images/dogImg.png');
	happyDogImg = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
	database = firebase.database();

	dog = createSprite(250,250,10,10);
	dog.addImage(dogImg);
	dog.scale = 0.4;

	//read the value of food from the database
	foodStock = database.ref('food');
	foodStock.on("value", function(data){
		foodS=data.val();
		console.log(foodS)
	});


	
  
}


function draw() {
 
  background(46, 139, 87);

  if(foodS){

	if(keyWentDown(UP_ARROW)){
		foodS = foodS -1;
		updateFoodStock(foodS);
		dog.addImage(happyDogImg);
  
	}

	textSize(30);
	fill("orange")
	text("Food Left :"+foodS, 150,50);
  

  }
  
  
  

  
 
  drawSprites();
 
}

function updateFoodStock(noOfTreats){
	database.ref('/').update({
		food : noOfTreats
	})
}
