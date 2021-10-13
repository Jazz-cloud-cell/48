class Game{
  constructor(){

  }

  getGameState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
       //It gaves the gameState value
    })
  }

  updateGamestate(state){
    database.ref('/').update({
      gameState: state
      //Updates gamestate
    });
  }
  
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getPlayerCount();
      }
      //database player count
      form = new Form()
      form.display();
    
    doremi = createSprite(100,200);
    doremi.addImage("doremi",doremi_img);
    doremi.scale=0.5
     doremon = createSprite(300,200);
     doremon.addImage("doremon",doremon_img);
     doremon.scale= 0.5
     nobita = createSprite(500,200);
     nobita.addImage("nobita",nobita_img);
     nobita.scale= 0.5
    sprites = [doremi, doremon, nobita];
    // adding image to all the spries
    }
}
play(){
  form.hide();

  player.getPlayerInfo();
  player.getFinishedPlayersInfo()

  if(allPlayers !== undefined){
    //var display_position = 100;
    background("white")
    image(sky, 0,-displayHeight*4,displayWidth, displayHeight*5);

    //index of the array
    var index =0;

    //x and y position of the cars
    var x =200;
    var y;

    for(var plr in allPlayers){
      //add 1 to the index for every loop
      index = index + 1 ;

      //position the cars a little away from each other in x direction
      x = x + 300;
      //use data form the database to display the cars in y direction
      y = displayHeight - allPlayers[plr].distance;
      sprites[index-1].x = x;
      sprites[index-1].y = y;
     // textAlign(CENTER);
      //textSize(20);
      //text(allPlayers[plr].name ,cars[index-1].x,cars[index-1].y+75);
      if (index === player.index){
        fill ("red");
        ellipse(x,y,60,60)
        //cars[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = sprites[index-1].y
      }
     
      //textSize(15);
      //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
    }

  }

  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=10
    player.update();
    //movement of sprites
  }
  if(player.distance > 4300){
    gameState = 2;
    player.rank+=1;
    player.updateFinishedPlayers();
    textSize(30)
    fill("blue")
    text("RANK: "+ player.rank,100,-3700)
    //Displays your rank only
    
  
  }         

  drawSprites();
}

end(){
  console.log("Game Ended" + player.rank);

   
}
}


