var Nakama = {};
Nakama.configs = {
  SHIP_SPEED  : 200,
  BULLET_SPEED: 1000
}

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');

  Nakama.game.time.advancedTiming = true;
}

var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  Nakama.shipControllers = [];

  var player2 = new ShipController(400, 400, "Spaceship1-Partner.png", {
    up    : Phaser.Keyboard.W,
    down  : Phaser.Keyboard.S,
    left  : Phaser.Keyboard.A,
    right : Phaser.Keyboard.D,
    fire  : Phaser.Keyboard.SHIFT,
    cooldown: 0.1
  });
  Nakama.shipControllers.push(player2);

  var player1 = new ShipController(200, 400, "Spaceship1-Player.png", {
    up      : Phaser.Keyboard.UP,
    down    : Phaser.Keyboard.DOWN,
    left    : Phaser.Keyboard.LEFT,
    right   : Phaser.Keyboard.RIGHT,
    fire    : Phaser.Keyboard.SPACEBAR,
    cooldown: 0.1
  });
  Nakama.shipControllers.push(player1);

  var enemy = Nakama.enemyGroup.create(
    320,
    100,
    'assets',
    "EnemyType1.png");
  enemy.health = 200;
}

var update = function(){

  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup, Nakama.enemyGroup, onBulletHitActor);
}

function onBulletHitActor(bulletSprite, actorSprite){
  actorSprite.damage(1);
  bulletSprite.kill();
}








var render = function(){}
