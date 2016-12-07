class ShipType3Controller extends ShipController{
  constructor(x, y, isPlayer1, configs){
    var spriteName = "Spaceship3-" + (isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = 0.05;
    configs.health = 3;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset = new Phaser.Point(16, 15);

    super(x, y, spriteName, configs);
  }

  fire(){
    new LaserController(this.sprite.position, this.sprite,{ power : 2, lifeTime: 0.1 });
  }
}
