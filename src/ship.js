const utils = require("./utils"),
  Vector = require("./vector"),
  MovingObject = require("./moving_object"),
  Bullet = require("./bullet");

function Ship(spec) {
  spec.vel = Vector.stopped();
  spec.color = Ship.COLOR;
  spec.radius = Ship.RADIUS;
  MovingObject.apply(this, [spec]);
};

utils.inherits(Ship, MovingObject);

Ship.RADIUS = 15;
Ship.COLOR = "#ff0000"

Ship.method("relocate", function() {
  this.pos = new Vector(this.game.randomPosition());
  this.vel = Vector.stopped();
});

Ship.method("power", function(impulse) {
    this.vel.extendBy(new Vector(impulse));
});

Ship.method("fireBullet", function() {
  let bullet = new Bullet({
    pos: [this.pos.x, this.pos.y],
    vel: new Vector([this.vel.x, this.vel.y]),
    game: this.game
  });

  this.game.bullets.push(bullet);
});


module.exports = Ship;