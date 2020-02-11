const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object");

function Bullet (spec) {
  spec.color = Bullet.COLOR;
  spec.radius = Bullet.RADIUS;
  spec.vel.scaleBy(1.5);
  MovingObject.apply(this, [spec])
};

utils.inherits(Bullet, MovingObject);
Bullet.COLOR = "#add8e6";
Bullet.RADIUS = 5;


Bullet.method("collideWith", function(mover) {
  const Asteroid = require("./asteroid");

  if (mover instanceof Asteroid) {
    this.game.remove(mover);
  };
});

Bullet.method("move", function() {
  this.pos.extendBy(this.vel);
  if (this.game.truncate(this.pos)) {
    this.game.remove(this);
  }
});


module.exports = Bullet;