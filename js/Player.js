class Player{
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
   this.rank=null;
    
  }

  getPlayerCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updatePlayerCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      name:this.name,
      distance:this.distance
    });
  }

  getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }


  getFinishedPlayersInfo()
  {
    var finishedPlayerRef=database.ref('finishedPlayers')
    finishedPlayerRef.on("value",(data)=>{
      this.rank=data.val();
    })


  }

  updateFinishedPlayers()
  {

     database.ref('/').update({
       finishedPlayers:this.rank
     })
  }

}

  
