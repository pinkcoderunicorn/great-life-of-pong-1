

var you;
var food1,food2,food3,food4,food5,food6,food7,food8,food9,food10;
var foods;


function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    food1 = createSprite(random(displayWidth/2,displayWidth),displayHeight-200,20,20);
    food2 = createSprite(random(displayWidth/8,displayWidth/6),displayHeight-100,20,20);
    food3 = createSprite(random(displayWidth/4,displayWidth),displayHeight-400,20,20);
    food4 = createSprite(random(displayWidth/10,displayWidth/6),displayHeight-500,20,20);
    food5 = createSprite(random(displayWidth/8,displayWidth),displayHeight-100,20,20);
    food6 = createSprite(random(displayWidth/5,displayWidth/2),displayHeight-600,20,20);
    food7 = createSprite(random(displayWidth/2,displayWidth/6),displayHeight-250,20,20);
    food8 = createSprite(random(displayWidth/8,displayWidth/7),displayHeight-300,20,20);
    food9 = createSprite(random(displayWidth/5,displayWidth/2),displayHeight-550,20,20);
    food10 = createSprite(random(displayWidth/10,displayWidth),displayHeight-150,20,20);

  you= createSprite(displayWidth/2, displayHeight,10,10);
  foods=[food1,food2,food3,food4,food5,food6,food7,food8,food9,food10];
    
  
  
}

function draw(){
    background("black");

    camera.position.x=you.x;
    camera.position.y=you.y;

    you.display();

    if(keyDown("up")){
   you.y= you.y-5;
    }

    if(keyDown("down")){
        you.y= you.y+5;
         }
         
    if(keyDown("left")){
            you.x= you.x-5;
             }

    if(keyDown("right")){
                you.x= you.x+5;
                 }

    if(you.isTouching(food1)||you.isTouching(food2)||you.isTouching(food3)||you.isTouching(food4)||you.isTouching(food5)||you.isTouching(food6)||you.isTouching(food7)||you.isTouching(food7)||you.isTouching(food8)||you.isTouching(food9)||you.isTouching(food10)){
      if(you.isTouching(food1)){
        you.scale = you.scale*1.1;
        food1.destroy();
        foods.pop();
      }
      if(you.isTouching(food2)){
        you.scale = you.scale*1.1;
        food2.destroy();
        foods.pop();
      }
      if(you.isTouching(food3)){
        you.scale = you.scale*1.1;
        food3.destroy();
        foods.pop();
      }
      if(you.isTouching(food4)){
        you.scale = you.scale*1.1;
        food4.destroy();
        foods.pop();
      }
      if(you.isTouching(food5)){
        you.scale = you.scale*1.1;
        food5.destroy();
        foods.pop();
      }
      if(you.isTouching(food6)){
        you.scale = you.scale*1.1;
        food6.destroy();
        foods.pop();
      }
      if(you.isTouching(food7)){
        you.scale = you.scale*1.1;
        food7.destroy();
        foods.pop();
      }
      if(you.isTouching(food8)){
        you.scale = you.scale*1.1;
        food8.destroy();
        foods.pop();
      }
      if(you.isTouching(food9)){
        you.scale = you.scale*1.2;
        food9.destroy();
        foods.pop();
      }
      if(you.isTouching(food10)){
        you.scale = you.scale*1.2;
        food10.destroy();
        foods.pop();
      }
    }


console.log(you.y);
    drawSprites(); 
}
