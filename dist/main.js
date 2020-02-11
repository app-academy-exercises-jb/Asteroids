/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\"),\n  Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\"),\n  MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Asteroid(spec) {\n  spec.vel = Vector.random(2.5);\n  spec.color = Asteroid.COLOR;\n  spec.radius = Asteroid.RADIUS;\n  MovingObject.apply(this, [spec]);\n};\n\nutils.inherits(Asteroid, MovingObject);\n\nAsteroid.COLOR = \"#0000ff\";\nAsteroid.RADIUS = 25;\n\nAsteroid.method(\"collideWith\", function(mover) {\n  const Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\"),\n    Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n  if (mover instanceof Ship) {\n    mover.relocate();\n  } else if (mover instanceof Bullet) {\n    this.game.remove(mover);\n  };\n});\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\"),\n  Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\"),\n  MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Bullet (spec) {\n  spec.color = Bullet.COLOR;\n  spec.radius = Bullet.RADIUS;\n  spec.vel.scaleBy(1.5);\n  MovingObject.apply(this, [spec])\n};\n\nutils.inherits(Bullet, MovingObject);\nBullet.COLOR = \"#add8e6\";\nBullet.RADIUS = 5;\n\n\nBullet.method(\"collideWith\", function(mover) {\n  const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n  if (mover instanceof Asteroid) {\n    this.game.remove(mover);\n  };\n});\n\nBullet.method(\"move\", function() {\n  this.pos.extendBy(this.vel);\n  if (this.game.truncate(this.pos)) {\n    this.game.remove(this);\n  }\n});\n\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\"),\n  Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\"),\n  Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Game () {\n    this.addAsteroids();\n    this.ship = new Ship({pos: this.randomPosition(), game: this});\n    this.bullets = [];\n};\n\nGame.DIM_X = 600;\nGame.DIM_Y = 400;\nGame.NUM_ASTEROIDS = 4;\n\nGame.method(\"allObjects\", function() {\n  return [...this.bullets, ...this.asteroids, this.ship]\n});\n\nGame.method(\"addAsteroids\", function () {\n  let asteroids = [];\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    let pos = this.randomPosition(),\n      aster = new Asteroid({pos: pos, game: this});\n    asteroids.push(aster);\n  }\n  this.asteroids = asteroids;\n  return this;\n});\n\nGame.method(\"randomPosition\", function() {\n  let x = Math.floor(Math.random() * Game.DIM_X),\n    y = Math.floor(Math.random() * Game.DIM_Y);\n  return [x,y];\n});\n\nGame.method(\"draw\", function (ctx, width, height) {\n  ctx.clearRect(0, 0, width, height);\n  this.allObjects().forEach(obj => { obj.draw(ctx); });\n});\n\nGame.method(\"moveObjects\", function() {\n  this.allObjects().forEach(obj => { obj.move(); });\n});\n\nGame.method(\"remove\", function(object) {\n  if (object instanceof Asteroid) {\n    let idx = this.asteroids.indexOf(object);\n    this.asteroids.splice(idx, 1);\n  } else if (object instanceof Bullet) {\n    let idx = this.bullets.indexOf(object);\n    this.bullets.splice(idx, 1);\n  } else {\n    alert (\"unrecognized type\")\n  }\n});\n\nGame.method(\"checkCollisions\", function() {\n  this.allObjects().forEach((object, idx) => {\n    this.allObjects().slice(idx+1).forEach((collider, jdx) => {\n      if (object.isCollidedWith(collider)) {\n        object.collideWith(collider);\n        collider.collideWith(object);\n      };\n    });\n  });\n});\n\nGame.method(\"step\", function() {\n  this.moveObjects();\n  this.checkCollisions();\n});\n\nGame.method(\"wrap\", function(pos) {\n  if (pos.x > Game.DIM_X) {\n    pos.x -= Game.DIM_X;\n  } else if (pos.x < 0) {\n    pos.x += Game.DIM_X;\n  }\n\n  if (pos.y > Game.DIM_Y) {\n    pos.y -= Game.DIM_Y;\n  } else if (pos.y < 0) {\n    pos.y += Game.DIM_Y;\n  }\n});\n\nGame.method(\"truncate\", function(pos) {\n  if (pos.x < 0 || pos.y < 0 || pos.x > Game.DIM_X || pos.y > Game.DIM_Y) {\n    return true;\n  }\n  return false;\n});\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView (ctx, canvas) {\n  this.ctx = ctx;\n  this.canvas = canvas;\n  this.game = new Game();\n};\n\nGameView.method(\"start\", function() {\n  // let that = this;\n  this.bindKeyHandlers();\n  setInterval(() => {\n    this.game.draw(this.ctx, this.canvas.width, this.canvas.height);\n    this.game.step();\n  }, 20);\n});\n\nGameView.method(\"bindKeyHandlers\", function() {\n    let ship = this.game.ship;\n    key(\"w\", function () { ship.power([0, -1]); });\n    key(\"a\", function () { ship.power([-1, 0]); });\n    key(\"s\", function () { ship.power([0, 1]); });\n    key(\"d\", function () { ship.power([1, 0]); });\n    key(\"space\", function () { ship.fireBullet(); });\n});\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\")\n\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n  let canvas = document.getElementById(\"game-canvas\"),\n    ctx = canvas.getContext(\"2d\");\n\n  let gameView = new GameView(ctx, canvas);\n  gameView.start();\n  \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\nfunction MovingObject(spec) {\n  this.pos = new Vector(spec.pos);\n  this.vel = spec.vel;\n  this.radius = spec.radius;\n  this.color = spec.color;\n  this.game = spec.game;\n};\n\nMovingObject.method(\"draw\", function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI, false);\n  ctx.fill();\n});\n\nMovingObject.method(\"move\", function() {\n    this.pos.extendBy(this.vel);\n    this.game.wrap(this.pos);\n});\n\nMovingObject.method(\"isCollidedWith\", function(mover) {\n  return this.pos.dist(mover.pos) < (mover.radius + this.radius - 1)\n});\n\nMovingObject.method(\"collideWith\", function(mover) {\n  // this.game.remove(this);\n  // this.game.remove(mover);\n});\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\"),\n  Vector = __webpack_require__(/*! ./vector */ \"./src/vector.js\"),\n  MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\"),\n  Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Ship(spec) {\n  spec.vel = Vector.stopped();\n  spec.color = Ship.COLOR;\n  spec.radius = Ship.RADIUS;\n  MovingObject.apply(this, [spec]);\n};\n\nutils.inherits(Ship, MovingObject);\n\nShip.RADIUS = 15;\nShip.COLOR = \"#ff0000\"\n\nShip.method(\"relocate\", function() {\n  this.pos = new Vector(this.game.randomPosition());\n  this.vel = Vector.stopped();\n});\n\nShip.method(\"power\", function(impulse) {\n    this.vel.extendBy(new Vector(impulse));\n});\n\nShip.method(\"fireBullet\", function() {\n  let bullet = new Bullet({\n    pos: [this.pos.x, this.pos.y],\n    vel: new Vector([this.vel.x, this.vel.y]),\n    game: this.game\n  });\n\n  this.game.bullets.push(bullet);\n});\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Function.prototype.method = function (name, func) {\n  this.prototype[name] = func;\n  return this;\n};\n\nconst Utils = {\n  inherits(child, parent) {\n   function create (o) {\n    function O () {};\n    O.prototype = o;\n    return new O();\n   }\n   child.prototype = create(parent.prototype);\n   return child;\n  }\n\n};\n\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Vector = function Vector(pos) {\n  this.x = pos[0];\n  this.y = pos[1];\n}\n\nVector.stopped = function() {\n  return new Vector([0,0]);\n};\n\nVector.method(\"extendBy\", function(vel) { \n  [this.x, this.y] = [this.x + vel.x, this.y + vel.y]; \n  return this;\n});\n\nVector.method(\"scaleBy\", function(m) {\n    this.x *= m;\n    this.y *= m;\n});\n\nVector.method(\"dist\", function(vec) {\n  return Math.sqrt(((this.x - vec.x) ** 2) + ((this.y - vec.y) ** 2))\n});\n\nVector.random = function(length) {\n    const deg = 2 * Math.PI * Math.random(),\n        vector = new Vector([Math.sin(deg), Math.cos(deg)]);\n    vector.scaleBy(length);\n    return vector;\n};\n\n// Vector.prototype.extendBy = function extendBy(vel) { \n//   this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; \n//   return this;\n// };\n\nmodule.exports = Vector;\n\n//# sourceURL=webpack:///./src/vector.js?");

/***/ })

/******/ });