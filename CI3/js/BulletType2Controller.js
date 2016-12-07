class BulletType2Controller extends BulletController{
  constructor(position, direction, configs){
    super(position, "BulletType2.png" ,direction, configs);
  }

  update(){
    var minDistance = 99999;
    for(var i=0; i < Nakama.enemies.length;i++){
      if(!Nakama.enemies[i].sprite.alive) continue;

      var distanceToEnemy = Phaser.Point.subtract(
        Nakama.enemies[i].sprite.position,
        this.sprite.position
      ).getMagnitude();

      if(distanceToEnemy < minDistance){
        minDistance = distanceToEnemy;
        this.target = Nakama.enemies[i];
      }
    };

    if(!this.target || !this.target.sprite.alive) return;

    this.sprite.body.velocity = Phaser.Point.subtract(
      this.target.sprite.position,
      this.sprite.position
    ).setMagnitude(Nakama.configs.BULLET_SPEED);

    this.sprite.angle = Math.atan2(
      this.sprite.body.velocity.x,
      -this.sprite.body.velocity.y
    ) * (180/Math.PI);
  }
}
