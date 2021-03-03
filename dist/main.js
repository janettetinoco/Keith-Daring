/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dogs.js":
/*!*********************!*\
  !*** ./src/dogs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dog)\n/* harmony export */ });\nclass Dog {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width;\n    this.y = this.dimensions.height - 150;\n    this.velocity = Math.floor(Math.random() * 4) + 1;\n  }\n\n  drawDog(ctx) {\n    const dog = new Image();\n    dog.src = 'src/images/dog_left.png';\n    ctx.drawImage(dog, this.x, this.y, 110, 100); // ctx.fillStyle = \"white\";\n    // ctx.fillRect(this.x, this.y, 30,30)\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawDog(ctx);\n  }\n\n  move() {\n    this.x -= this.velocity;\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/dogs.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeithGame)\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dogs */ \"./src/dogs.js\");\n/* harmony import */ var _hearts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hearts */ \"./src/hearts.js\");\n\n\n\n\nclass KeithGame {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.eventsHandler();\n    this.restart();\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.player.animate(this.ctx); //test\n    // this.obstacle.animate(this.ctx);\n    // this.heart.animate(this.ctx);\n    //\n\n    if (this.gameStarted) {\n      //this needs to happen as you refresh the page\n      this.checkCollison();\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  restart() {\n    this.running = false;\n    this.gameStarted = true; //when game is over change to false\n\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions); //testing\n\n    this.obstacle = new _dogs__WEBPACK_IMPORTED_MODULE_2__.default(this.dimensions);\n    this.heart = new _hearts__WEBPACK_IMPORTED_MODULE_3__.default(this.dimensions); //\n\n    this.animate();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  spaceDown() {\n    if (!this.running) {\n      this.play();\n    }\n\n    console.log(\"hi\");\n    this.player.speedUp();\n  }\n\n  arrowUpJump() {\n    if (!this.running) {\n      this.play();\n    }\n\n    this.player.jump();\n  }\n\n  checkCollison() {\n    if (this.player.bounds().right > this.obstacle.x && this.player.bounds().bottom > this.obstacle.y && this.player.bounds().left < this.obstacle.x + 30) {\n      alert(\"youre hit\");\n    }\n  }\n\n  eventsHandler() {\n    this.spaceBarHandler = this.spaceDown.bind(this);\n    this.arrowUpHAndler = this.arrowUpJump.bind(this);\n    window.addEventListener(\"keydown\", e => {\n      if (e.code === 'Space') {\n        this.spaceBarHandler();\n      } else if (e.code === 'ArrowUp') {\n        this.arrowUpHAndler();\n      }\n    });\n    window.addEventListener(\"keyup\", e => {\n      this.player.velocity = .5;\n    });\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/game.js?");

/***/ }),

/***/ "./src/hearts.js":
/*!***********************!*\
  !*** ./src/hearts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hearts)\n/* harmony export */ });\nclass Hearts {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width;\n    this.y = this.dimensions.height - 150;\n    this.velocity = Math.floor(Math.random() * 4) + 1;\n  }\n\n  drawHeart(ctx) {\n    const dog = new Image();\n    dog.src = 'css/images/heart.png'; // ctx.drawImage(dog, this.x, this.y, 60, 50)\n    // ctx.drawImage(dog, this.x+60, this.y, 55, 45)\n\n    this.drawFrame(ctx, dog, this.x, this.y, 60, 50);\n    this.drawFrame(ctx, dog, this.x + 60, this.y, 55, 45); // ctx.fillStyle = \"white\";\n    // ctx.fillRect(this.x, this.y, 30,30)\n  }\n\n  drawFrame(ctx, img, frameX, frameY, canvasX, canvasY) {\n    ctx.drawImage(img, frameX, frameY, canvasX, canvasY);\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawHeart(ctx);\n  }\n\n  move() {\n    this.x -= this.velocity;\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/hearts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nconst canvas = document.getElementById('game-board');\nnew _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\n\n//# sourceURL=webpack://Keith-Daring/./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"#ffd24d\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    this.drawBase(ctx);\n    this.drawDots(ctx);\n  }\n\n  drawBase(context) {\n    context.lineWidth = 3;\n    context.moveTo(1, 480);\n    context.lineTo(100, 466);\n    context.lineTo(320, 468);\n    context.lineTo(350, 470);\n    context.lineTo(500, 466);\n    context.lineTo(900, 475);\n    context.stroke();\n  }\n\n  drawDots(context) {\n    context.fillStyle = \"black\";\n\n    for (let i = 1; i < 900; i = i + 40) {\n      context.fillRect(i + 25, 475, 10, 9);\n      context.fillRect(i, 490, 10, 9);\n      context.fillRect(i + 28, 505, 10, 9);\n      context.fillRect(i + 13, 518, 10, 8);\n      context.fillRect(i + 28, 530, 10, 9);\n      context.fillRect(i, 545, 10, 9);\n    }\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/level.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nconst CONSTANTS = {\n  PLAYER_W: 50,\n  PLAYER_H: 50,\n  GRAVITY: 0.2\n};\nclass Player {\n  constructor(dimensions) {\n    this.velocity = 0;\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width / 12;\n    this.y = this.dimensions.height * .60;\n    this.height = 0;\n  }\n\n  drawPlayer(ctx) {\n    const player = new Image();\n    player.src = 'css/images/player.png';\n    console.log(this.x);\n    console.log(this.y);\n    ctx.drawImage(player, this.x, this.y, 85, 140); // player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))\n    // this.loadPlayer(ctx);\n    // debugger\n    // ctx.fillStyle = \"black\";\n    // ctx.fillRect(this.x, this.y, CONSTANTS.PLAYER_W, CONSTANTS.PLAYER_H)\n  }\n\n  animate(ctx) {\n    console.log(\"hello\");\n    this.move();\n    this.drawPlayer(ctx);\n  } // loadPlayer(ctx){\n  //     const player = new Image();\n  //     player.onload = () => (ctx.drawImage(player, this.x, this.y, 85, 120))\n  //     player.src = 'src/images/player.png';\n  // }\n\n\n  move() {\n    this.x += this.velocity;\n    this.y -= this.height;\n\n    if (this.y - this.height < 345) {\n      this.height -= CONSTANTS.GRAVITY;\n    } else {\n      this.height = 0;\n    }\n  }\n\n  speedUp() {\n    this.velocity += .5;\n  }\n\n  jump() {\n    this.height = 8;\n  }\n\n  bounds() {\n    return {\n      left: this.x,\n      right: this.x + CONSTANTS.PLAYER_W,\n      top: this.y,\n      bottom: this.y + CONSTANTS.PLAYER_H\n    };\n  }\n\n}\n\n//# sourceURL=webpack://Keith-Daring/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;