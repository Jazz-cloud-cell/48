var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var doremi, doremon, nobita, sprites;

function preload()
{
  sky = loadImage("images/sky.jpg");
  doremi_img = loadImage("images/doremi.png");
  doremon_img = loadImage("images/doremon.png");
  nobita_img = loadImage("images/nobita.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getGameState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.updateGamestate(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if (gameState===2){
    game.end();
  } 

}
