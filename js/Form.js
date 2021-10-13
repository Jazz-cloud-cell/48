class Form{
  
  constructor(){
    this.title =  createElement("h1");
    this.nameBox = createInput("Name")
    this.nameButton = createButton("Go!")
    this.greeting =  createElement("h2");
    this.reset = createButton('Reset');
  }

  hide(){
    this.greeting.hide();
    this.nameButton.hide();
    this.nameBox.hide();
    this.title.hide();
  }

  display(){
    
    this.nameBox.position(width/2, height/2)
    
    this.nameButton.position(width/2, height/2+100);

    this.title.html("Bamboo Copetr Run");
    this.title.position(displayWidth/2-50, 0);

    this.reset.position(displayWidth-100,20);

    this.nameButton.mousePressed(()=>{
      this.nameBox.hide();
      this.nameButton.hide();
      player.name = this.nameBox.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updatePlayerCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updatePlayerCount(0);
      game.updateGamestate(0);
    });
  }
}

