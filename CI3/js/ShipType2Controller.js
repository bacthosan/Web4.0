class ShipType2Controller extends ShipController{
  constructor(x, y, isPlayer1, configs){
    var spriteName = "Spaceship2-" + (isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = 0.3;
    configs.health = 7;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset = new Phaser.Point(25, 20);
    
    super(x, y, spriteName, configs);
  }

  fire(){
  }
}
