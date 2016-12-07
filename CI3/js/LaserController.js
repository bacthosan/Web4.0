class LaserController {
  constructor(position, ship, configs){
    this.configs = configs;
    this.ship = ship;

    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      'assets',
      "BulletType3.png");
    this.sprite.anchor = new Phaser.Point(0.5, 1);
    this.sprite.power = this.configs.power;
    this.sprite.onHitTarget = function(){}

    Nakama.bulletControllers.push(this);
    this.timeSinceShot = 0;
  }

  update(){
    this.timeSinceShot += Nakama.game.time.physicsElapsed;
    if(this.timeSinceShot > this.configs.lifeTime){
      this.sprite.kill();
      Nakama.bulletControllers.splice(Nakama.bulletControllers.indexOf(this), 1);
    }

    this.sprite.position = this.ship.position;
  }
}
