const Vector = require("./vector");

function MovingObject(spec) {
  this.pos = new Vector(spec.pos);
  this.vel = spec.vel;
  this.radius = spec.radius;
  this.color = spec.color;
  this.game = spec.game;
};

MovingObject.method("draw", function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI, false);
  ctx.fill();
});

MovingObject.method("move", function() {
    this.pos.extendBy(this.vel);
    this.game.wrap(this.pos);
});

MovingObject.method("isCollidedWith", function(mover) {
  return this.pos.dist(mover.pos) < (mover.radius + this.radius - 1)
});

MovingObject.method("collideWith", function(mover) {
  // this.game.remove(this);
  // this.game.remove(mover);
});

module.exports = MovingObject;