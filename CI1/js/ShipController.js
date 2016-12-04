class ShipController{
  constructor(x, y, spriteName, configs){
    this.configs = configs;

    this.sprite = Nakama.playerGroup.create(
      x,
      y,
      'assets',
      spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.timeSinceLastFire = 0;
  }

  update(){
    this.timeSinceLastFire += Nakama.game.time.physicsElapsed;

    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -Nakama.configs.SHIP_SPEED;
    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = Nakama.configs.SHIP_SPEED;
    }
    else{
      this.sprite.body.velocity.y = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -Nakama.configs.SHIP_SPEED;
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = Nakama.configs.SHIP_SPEED;
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.fire) && this.timeSinceLastFire >= this.configs.cooldown){
      this.fire();
      this.timeSinceLastFire = 0;
    }
  }

  fire(){
    var newBullet1 = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      "BulletType1.png"
    );

    newBullet1.anchor = new Phaser.Point(0.5, 0.5);
    Nakama.game.physics.enable(newBullet1, Phaser.Physics.ARCADE);

    var newBullet2 = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      "BulletType1.png"
    );

    newBullet2.anchor = new Phaser.Point(0.5, 0.5);
    Nakama.game.physics.enable(newBullet2, Phaser.Physics.ARCADE);

    var newBullet3 = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      "BulletType1.png"
    );

    newBullet3.anchor = new Phaser.Point(0.5, 0.5);
    Nakama.game.physics.enable(newBullet3, Phaser.Physics.ARCADE);

    var newBullet4 = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      "BulletType1.png"
    );

    newBullet4.anchor = new Phaser.Point(0.5, 0.5);
    Nakama.game.physics.enable(newBullet4, Phaser.Physics.ARCADE);

    var newBullet5 = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      "BulletType1.png"
    );

    newBullet5.anchor = new Phaser.Point(0.5, 0.5);
    Nakama.game.physics.enable(newBullet5, Phaser.Physics.ARCADE);


    newBullet1.body.velocity = new Phaser.Point(0, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    newBullet2.body.velocity = new Phaser.Point(1, -10).setMagnitude(Nakama.configs.BULLET_SPEED);
    newBullet3.body.velocity = new Phaser.Point(-1, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    newBullet4.body.velocity = new Phaser.Point(5, -10).setMagnitude(Nakama.configs.BULLET_SPEED);
    newBullet5.body.velocity = new Phaser.Point(-5, -10).setMagnitude(Nakama.configs.BULLET_SPEED);
  }
}
