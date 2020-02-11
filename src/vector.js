const Vector = function Vector(pos) {
  this.x = pos[0];
  this.y = pos[1];
}

Vector.stopped = function() {
  return new Vector([0,0]);
};

Vector.method("extendBy", function(vel) { 
  [this.x, this.y] = [this.x + vel.x, this.y + vel.y]; 
  return this;
});

Vector.method("scaleBy", function(m) {
    this.x *= m;
    this.y *= m;
});

Vector.method("dist", function(vec) {
  return Math.sqrt(((this.x - vec.x) ** 2) + ((this.y - vec.y) ** 2))
});

Vector.random = function(length) {
    const deg = 2 * Math.PI * Math.random(),
        vector = new Vector([Math.sin(deg), Math.cos(deg)]);
    vector.scaleBy(length);
    return vector;
};

// Vector.prototype.extendBy = function extendBy(vel) { 
//   this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; 
//   return this;
// };

module.exports = Vector;