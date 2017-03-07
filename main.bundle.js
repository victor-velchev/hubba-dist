webpackJsonp([0,3],{

/***/ 547:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 547;


/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(655);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Admin/Documents/Angular-ii/hubba-project/src/main.js.map

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__giphy_service__ = __webpack_require__(656);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(giphyService) {
        this.giphyService = giphyService;
        this.imagesCollection = {};
        this.isHappy = false;
        this.isAngry = false;
        this.isSad = false;
        this.isHypnotic = false;
        this.isRomantic = false;
        this.isMysterious = false;
        this.isDoubtful = false;
        this.isCool = false;
        this.isScared = false;
        this.isDumb = false;
        this.isTired = false;
        this.isAmazed = false;
        this.isSick = false;
        this.isAlien = false;
        this.isElementSelected = false;
        // public testSrc: string = 'https://media1.giphy.com/media/l3E6xRDHfIP65m7pS/200.gif';
        this.isAllowedToShowCards = false;
        this.lastElementSelected = '';
        this.lastElementSrc = '';
        this.lastElementCoord = {};
        this.unmaskDisabled = false;
        this.playerErrors = 0;
        this.playerDied = true;
        this.bestScore = 999;
        this.currentClicks = 0;
        this.cardMatrix = [[]];
        this.cardMatrix[0] = [{ selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }];
        this.cardMatrix[1] = [{ selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }];
        this.cardMatrix[2] = [{ selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }, { selector: '', src: '', peek: false }];
        this.imagesCollection['happy'] = [];
        this.imagesCollection['angry'] = [];
        this.imagesCollection['sad'] = [];
        this.imagesCollection['hypnotic'] = [];
        this.imagesCollection['romantic'] = [];
        this.imagesCollection['mysterious'] = [];
        this.imagesCollection['doubtful'] = [];
        this.imagesCollection['cool'] = [];
        this.imagesCollection['scared'] = [];
        this.imagesCollection['dumb'] = [];
        this.imagesCollection['tired'] = [];
        this.imagesCollection['amazed'] = [];
        this.imagesCollection['sick'] = [];
        this.imagesCollection['alien'] = [];
    }
    AppComponent.prototype.toggleElementSelected = function () {
        this.isElementSelected = !this.isElementSelected;
    };
    AppComponent.prototype.pushIntoImagesCollection = function (_selector, _data) {
        if (!this.imagesCollection.hasOwnProperty(_selector)) {
            this.imagesCollection[_selector] = [];
        }
        this.imagesCollection[_selector] = _data;
        this.processGiphysToMatrix(_selector, _data);
    };
    AppComponent.prototype.shuffleArray = function (_array) {
        for (var i = _array.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [_array[j], _array[i - 1]], _array[i - 1] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
    };
    AppComponent.prototype.resetGame = function () {
        if (this.isHappy === true) {
            this.toggleHappy();
        }
        else if (this.isAngry === true) {
            this.toggleAngry();
        }
        else if (this.isSad === true) {
            this.toggleSad();
        }
        else if (this.isHypnotic === true) {
            this.toggleHypnotic();
        }
        else if (this.isRomantic === true) {
            this.toggleRomantic();
        }
        else if (this.isMysterious === true) {
            this.toggleMysterious();
        }
        else if (this.isDoubtful === true) {
            this.toggleDoubtful();
        }
        else if (this.isCool === true) {
            this.toggleCool();
        }
        else if (this.isScared === true) {
            this.toggleScared();
        }
        else if (this.isDumb === true) {
            this.toggleDumb();
        }
        else if (this.isTired === true) {
            this.toggleTired();
        }
        else if (this.isAmazed === true) {
            this.toggleAmazed();
        }
        else if (this.isSick === true) {
            this.toggleSick();
        }
        else if (this.isAlien === true) {
            this.toggleAlien();
        }
        this.playerErrors = 0;
        this.playerDied = true;
        this.currentClicks = 0;
    };
    AppComponent.prototype.toggleMask = function (row, column) {
        var _this = this;
        if (this.playerErrors >= 6) {
            this.resetGame();
        }
        this.unmaskDisabled = true;
        if (this.lastElementCoord['row'] === row && this.lastElementCoord['column'] === column) {
            //same do nothing, same element is clicked
            this.unmaskDisabled = false;
        }
        else {
            this.currentClicks++;
            this.cardMatrix[row][column].peek = !this.cardMatrix[row][column].peek;
            if (this.lastElementSrc === '') {
                this.lastElementSrc = this.cardMatrix[row][column]['srcReal'];
                this.lastElementCoord = { 'row': row, 'column': column };
                this.unmaskDisabled = false;
            }
            else {
                if (this.lastElementSrc === this.cardMatrix[row][column]['srcReal']) {
                    setTimeout(function () {
                        //match cardA
                        _this.cardMatrix[_this.lastElementCoord['row']][_this.lastElementCoord['column']]['matched'] = true;
                        //match cardB
                        _this.cardMatrix[row][column]['matched'] = true;
                        //check if player won
                        var gameWon = true;
                        for (var i = 0; i < 3; i++) {
                            for (var j = 0; j < 4; j++) {
                                if (_this.cardMatrix[i][j]['matched'] === false) {
                                    gameWon = false;
                                }
                            }
                        }
                        //reset values
                        _this.lastElementSrc = '';
                        _this.lastElementCoord = {};
                        for (var i = 0; i < 3; i++) {
                            for (var j = 0; j < 4; j++) {
                                _this.cardMatrix[i][j].peek = false;
                            }
                        }
                        _this.unmaskDisabled = false;
                        if (gameWon) {
                            if (_this.currentClicks < _this.bestScore) {
                                _this.bestScore = parseInt(_this.currentClicks.toString());
                            }
                            _this.resetGame();
                        }
                    }, 3000);
                }
                else {
                    setTimeout(function () {
                        _this.lastElementSrc = '';
                        _this.lastElementCoord = {};
                        for (var i = 0; i < 3; i++) {
                            for (var j = 0; j < 4; j++) {
                                _this.cardMatrix[i][j].peek = false;
                            }
                        }
                        _this.unmaskDisabled = false;
                        _this.playerErrors++;
                    }, 3000);
                }
            }
        }
    };
    AppComponent.prototype.processGiphysToMatrix = function (_selector, _data) {
        if (typeof _data === 'object') {
            var itemsToPush = [];
            // prepare and shuffle coords
            var itemsMatrixCoords = this.shuffleArray([
                { row: 0, column: 0 },
                { row: 0, column: 1 },
                { row: 0, column: 2 },
                { row: 0, column: 3 },
                { row: 1, column: 0 },
                { row: 1, column: 1 },
                { row: 1, column: 2 },
                { row: 1, column: 3 },
                { row: 2, column: 0 },
                { row: 2, column: 1 },
                { row: 2, column: 2 },
                { row: 2, column: 3 }
            ]);
            // prepare cards
            for (var i = 0; i < _data.length; i++) {
                if (_data[i].hasOwnProperty('images')) {
                    if (_data[i]['images'].hasOwnProperty('fixed_height_small')) {
                        var cardObject = {};
                        cardObject['selector'] = _selector;
                        cardObject['srcReal'] = _data[i]['images']['fixed_height_small']['url'];
                        cardObject['peek'] = false;
                        cardObject['srcCover'] = '/assets/enigma.jpg';
                        cardObject['matched'] = false;
                        itemsToPush.push(cardObject);
                    }
                }
            }
            var totalPairs = 6;
            for (var i = 0; i < totalPairs; i++) {
                var tmpCard = itemsToPush.pop();
                var tmpCoordOne = itemsMatrixCoords.pop();
                var tmpCoordTwo = itemsMatrixCoords.pop();
                this.cardMatrix[tmpCoordOne['row']][tmpCoordOne['column']] = tmpCard;
                this.cardMatrix[tmpCoordTwo['row']][tmpCoordTwo['column']] = Object.assign({}, tmpCard);
            }
            this.isAllowedToShowCards = true;
        }
        else {
            console.log('function received incompatible data!');
        }
    };
    AppComponent.prototype.nullifyFromImagesCollection = function (_selector) {
        if (this.imagesCollection.hasOwnProperty(_selector)) {
            this.imagesCollection[_selector] = [];
        }
        this.isAllowedToShowCards = false;
    };
    AppComponent.prototype.attemptGiphyFetch = function (_selector) {
        var _this = this;
        this.giphyService.attemptGiphyFetch(_selector).then(function (result) {
            if (result.response['success'] === true) {
                _this.pushIntoImagesCollection(_selector, result.response['giphys']);
            }
            else {
                _this.nullifyFromImagesCollection(_selector);
            }
        });
    };
    AppComponent.prototype.untoggleAllExcept = function (_selector) {
        if (_selector !== 'happy') {
            this.isHappy = false;
        }
        if (_selector !== 'angry') {
            this.isAngry = false;
        }
        if (_selector !== 'sad') {
            this.isSad = false;
        }
        if (_selector !== 'hypnotic') {
            this.isHypnotic = false;
        }
        if (_selector !== 'romantic') {
            this.isRomantic = false;
        }
        if (_selector !== 'mysterious') {
            this.isMysterious = false;
        }
        if (_selector !== 'doubtful') {
            this.isDoubtful = false;
        }
        if (_selector !== 'cool') {
            this.isCool = false;
        }
        if (_selector !== 'scared') {
            this.isScared = false;
        }
        if (_selector !== 'dumb') {
            this.isDumb = false;
        }
        if (_selector !== 'tired') {
            this.isTired = false;
        }
        if (_selector !== 'amazed') {
            this.isAmazed = false;
        }
        if (_selector !== 'sick') {
            this.isSick = false;
        }
        if (_selector !== 'alien') {
            this.isAlien = false;
        }
    };
    AppComponent.prototype.toggleHappy = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'happy') {
            this.playerDied = false;
            this.lastElementSelected = 'happy';
            this.isHappy = !this.isHappy;
            this.untoggleAllExcept('happy');
            this.toggleElementSelected();
            if (this.isHappy === true) {
                this.attemptGiphyFetch('happy');
            }
            else {
                this.nullifyFromImagesCollection('happy');
            }
        }
    };
    AppComponent.prototype.toggleAngry = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'angry') {
            this.playerDied = false;
            this.lastElementSelected = 'angry';
            this.isAngry = !this.isAngry;
            this.untoggleAllExcept('angry');
            this.toggleElementSelected();
            if (this.isAngry === true) {
                this.attemptGiphyFetch('angry');
            }
            else {
                this.nullifyFromImagesCollection('angry');
            }
        }
    };
    AppComponent.prototype.toggleSad = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'sad') {
            this.playerDied = false;
            this.lastElementSelected = 'sad';
            this.isSad = !this.isSad;
            this.untoggleAllExcept('sad');
            this.toggleElementSelected();
            if (this.isSad === true) {
                this.attemptGiphyFetch('sad');
            }
            else {
                this.nullifyFromImagesCollection('sad');
            }
        }
    };
    AppComponent.prototype.toggleHypnotic = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'hypnotic') {
            this.playerDied = false;
            this.lastElementSelected = 'hypnotic';
            this.isHypnotic = !this.isHypnotic;
            this.untoggleAllExcept('hypnotic');
            this.toggleElementSelected();
            if (this.isHypnotic === true) {
                this.attemptGiphyFetch('hypnotic');
            }
            else {
                this.nullifyFromImagesCollection('hypnotic');
            }
        }
    };
    AppComponent.prototype.toggleRomantic = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'romantic') {
            this.playerDied = false;
            this.lastElementSelected = 'romantic';
            this.isRomantic = !this.isRomantic;
            this.untoggleAllExcept('romantic');
            this.toggleElementSelected();
            if (this.isRomantic === true) {
                this.attemptGiphyFetch('romantic');
            }
            else {
                this.nullifyFromImagesCollection('romantic');
            }
        }
    };
    AppComponent.prototype.toggleMysterious = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'mysterious') {
            this.playerDied = false;
            this.lastElementSelected = 'mysterious';
            this.isMysterious = !this.isMysterious;
            this.untoggleAllExcept('mysterious');
            this.toggleElementSelected();
            if (this.isMysterious === true) {
                this.attemptGiphyFetch('mysteriou');
            }
            else {
                this.nullifyFromImagesCollection('mysteriou');
            }
        }
    };
    AppComponent.prototype.toggleDoubtful = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'doubtful') {
            this.playerDied = false;
            this.lastElementSelected = 'doubtful';
            this.isDoubtful = !this.isDoubtful;
            this.untoggleAllExcept('doubtful');
            this.toggleElementSelected();
            if (this.isDoubtful === true) {
                this.attemptGiphyFetch('doubtful');
            }
            else {
                this.nullifyFromImagesCollection('doubtful');
            }
        }
    };
    AppComponent.prototype.toggleCool = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'cool') {
            this.playerDied = false;
            this.lastElementSelected = 'cool';
            this.isCool = !this.isCool;
            this.untoggleAllExcept('cool');
            this.toggleElementSelected();
            if (this.isCool === true) {
                this.attemptGiphyFetch('cool');
            }
            else {
                this.nullifyFromImagesCollection('cool');
            }
        }
    };
    AppComponent.prototype.toggleScared = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'scared') {
            this.playerDied = false;
            this.lastElementSelected = 'scared';
            this.isScared = !this.isScared;
            this.untoggleAllExcept('scared');
            this.toggleElementSelected();
            if (this.isScared === true) {
                this.attemptGiphyFetch('scared');
            }
            else {
                this.nullifyFromImagesCollection('scared');
            }
        }
    };
    AppComponent.prototype.toggleDumb = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'dumb') {
            this.playerDied = false;
            this.lastElementSelected = 'dumb';
            this.isDumb = !this.isDumb;
            this.untoggleAllExcept('dumb');
            this.toggleElementSelected();
            if (this.isDumb === true) {
                this.attemptGiphyFetch('dumb');
            }
            else {
                this.nullifyFromImagesCollection('dumb');
            }
        }
    };
    AppComponent.prototype.toggleTired = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'tired') {
            this.playerDied = false;
            this.lastElementSelected = 'tired';
            this.isTired = !this.isTired;
            this.untoggleAllExcept('tired');
            this.toggleElementSelected();
            if (this.isTired === true) {
                this.attemptGiphyFetch('tired');
            }
            else {
                this.nullifyFromImagesCollection('tired');
            }
        }
    };
    AppComponent.prototype.toggleAmazed = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'amazed') {
            this.playerDied = false;
            this.lastElementSelected = 'amazed';
            this.isAmazed = !this.isAmazed;
            this.untoggleAllExcept('amazed');
            this.toggleElementSelected();
            if (this.isAmazed === true) {
                this.attemptGiphyFetch('amazed');
            }
            else {
                this.nullifyFromImagesCollection('amazed');
            }
        }
    };
    AppComponent.prototype.toggleSick = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'sick') {
            this.playerDied = false;
            this.lastElementSelected = 'sick';
            this.isSick = !this.isSick;
            this.untoggleAllExcept('sick');
            this.toggleElementSelected();
            if (this.isSick === true) {
                this.attemptGiphyFetch('sick');
            }
            else {
                this.nullifyFromImagesCollection('sick');
            }
        }
    };
    AppComponent.prototype.toggleAlien = function () {
        if (!this.isElementSelected || this.lastElementSelected === 'alien') {
            this.playerDied = false;
            this.lastElementSelected = 'alien';
            this.isAlien = !this.isAlien;
            this.untoggleAllExcept('alien');
            this.toggleElementSelected();
            if (this.isAlien === true) {
                this.attemptGiphyFetch('alien');
            }
            else {
                this.nullifyFromImagesCollection('alien');
            }
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(836),
            styles: [__webpack_require__(835)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__giphy_service__["a" /* GiphyService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__giphy_service__["a" /* GiphyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__giphy_service__["a" /* GiphyService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Admin/Documents/Angular-ii/hubba-project/src/app.component.js.map

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(818);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* AlertModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Admin/Documents/Angular-ii/hubba-project/src/app.module.js.map

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GiphyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GiphyService = (function () {
    function GiphyService(http) {
        this.http = http;
        this.giphyUri = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
    }
    GiphyService.prototype.attemptGiphyFetch = function (_queryParam) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.http.get(_this.buildGiphyQueryString(_queryParam)).subscribe(function (data) {
                var report = {};
                data = data.json();
                report['success'] = true;
                report['giphys'] = data['data'];
                resolve({ response: report });
            }, function (error) {
                var report = {};
                error = error.json();
                report['success'] = false;
                resolve({ response: report });
            });
        });
    };
    GiphyService.prototype.buildGiphyQueryString = function (_queryParam) {
        if (_queryParam !== null && _queryParam !== 'undefined') {
            return this.giphyUri + _queryParam;
        }
    };
    GiphyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], GiphyService);
    return GiphyService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Admin/Documents/Angular-ii/hubba-project/src/giphy.service.js.map

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Admin/Documents/Angular-ii/hubba-project/src/environment.js.map

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Admin/Documents/Angular-ii/hubba-project/src/polyfills.js.map

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./af": 376,
	"./af.js": 376,
	"./ar": 382,
	"./ar-dz": 377,
	"./ar-dz.js": 377,
	"./ar-ly": 378,
	"./ar-ly.js": 378,
	"./ar-ma": 379,
	"./ar-ma.js": 379,
	"./ar-sa": 380,
	"./ar-sa.js": 380,
	"./ar-tn": 381,
	"./ar-tn.js": 381,
	"./ar.js": 382,
	"./az": 383,
	"./az.js": 383,
	"./be": 384,
	"./be.js": 384,
	"./bg": 385,
	"./bg.js": 385,
	"./bn": 386,
	"./bn.js": 386,
	"./bo": 387,
	"./bo.js": 387,
	"./br": 388,
	"./br.js": 388,
	"./bs": 389,
	"./bs.js": 389,
	"./ca": 390,
	"./ca.js": 390,
	"./cs": 391,
	"./cs.js": 391,
	"./cv": 392,
	"./cv.js": 392,
	"./cy": 393,
	"./cy.js": 393,
	"./da": 394,
	"./da.js": 394,
	"./de": 396,
	"./de-at": 395,
	"./de-at.js": 395,
	"./de.js": 396,
	"./dv": 397,
	"./dv.js": 397,
	"./el": 398,
	"./el.js": 398,
	"./en-au": 399,
	"./en-au.js": 399,
	"./en-ca": 400,
	"./en-ca.js": 400,
	"./en-gb": 401,
	"./en-gb.js": 401,
	"./en-ie": 402,
	"./en-ie.js": 402,
	"./en-nz": 403,
	"./en-nz.js": 403,
	"./eo": 404,
	"./eo.js": 404,
	"./es": 406,
	"./es-do": 405,
	"./es-do.js": 405,
	"./es.js": 406,
	"./et": 407,
	"./et.js": 407,
	"./eu": 408,
	"./eu.js": 408,
	"./fa": 409,
	"./fa.js": 409,
	"./fi": 410,
	"./fi.js": 410,
	"./fo": 411,
	"./fo.js": 411,
	"./fr": 414,
	"./fr-ca": 412,
	"./fr-ca.js": 412,
	"./fr-ch": 413,
	"./fr-ch.js": 413,
	"./fr.js": 414,
	"./fy": 415,
	"./fy.js": 415,
	"./gd": 416,
	"./gd.js": 416,
	"./gl": 417,
	"./gl.js": 417,
	"./he": 418,
	"./he.js": 418,
	"./hi": 419,
	"./hi.js": 419,
	"./hr": 420,
	"./hr.js": 420,
	"./hu": 421,
	"./hu.js": 421,
	"./hy-am": 422,
	"./hy-am.js": 422,
	"./id": 423,
	"./id.js": 423,
	"./is": 424,
	"./is.js": 424,
	"./it": 425,
	"./it.js": 425,
	"./ja": 426,
	"./ja.js": 426,
	"./jv": 427,
	"./jv.js": 427,
	"./ka": 428,
	"./ka.js": 428,
	"./kk": 429,
	"./kk.js": 429,
	"./km": 430,
	"./km.js": 430,
	"./ko": 431,
	"./ko.js": 431,
	"./ky": 432,
	"./ky.js": 432,
	"./lb": 433,
	"./lb.js": 433,
	"./lo": 434,
	"./lo.js": 434,
	"./lt": 435,
	"./lt.js": 435,
	"./lv": 436,
	"./lv.js": 436,
	"./me": 437,
	"./me.js": 437,
	"./mi": 438,
	"./mi.js": 438,
	"./mk": 439,
	"./mk.js": 439,
	"./ml": 440,
	"./ml.js": 440,
	"./mr": 441,
	"./mr.js": 441,
	"./ms": 443,
	"./ms-my": 442,
	"./ms-my.js": 442,
	"./ms.js": 443,
	"./my": 444,
	"./my.js": 444,
	"./nb": 445,
	"./nb.js": 445,
	"./ne": 446,
	"./ne.js": 446,
	"./nl": 448,
	"./nl-be": 447,
	"./nl-be.js": 447,
	"./nl.js": 448,
	"./nn": 449,
	"./nn.js": 449,
	"./pa-in": 450,
	"./pa-in.js": 450,
	"./pl": 451,
	"./pl.js": 451,
	"./pt": 453,
	"./pt-br": 452,
	"./pt-br.js": 452,
	"./pt.js": 453,
	"./ro": 454,
	"./ro.js": 454,
	"./ru": 455,
	"./ru.js": 455,
	"./se": 456,
	"./se.js": 456,
	"./si": 457,
	"./si.js": 457,
	"./sk": 458,
	"./sk.js": 458,
	"./sl": 459,
	"./sl.js": 459,
	"./sq": 460,
	"./sq.js": 460,
	"./sr": 462,
	"./sr-cyrl": 461,
	"./sr-cyrl.js": 461,
	"./sr.js": 462,
	"./ss": 463,
	"./ss.js": 463,
	"./sv": 464,
	"./sv.js": 464,
	"./sw": 465,
	"./sw.js": 465,
	"./ta": 466,
	"./ta.js": 466,
	"./te": 467,
	"./te.js": 467,
	"./tet": 468,
	"./tet.js": 468,
	"./th": 469,
	"./th.js": 469,
	"./tl-ph": 470,
	"./tl-ph.js": 470,
	"./tlh": 471,
	"./tlh.js": 471,
	"./tr": 472,
	"./tr.js": 472,
	"./tzl": 473,
	"./tzl.js": 473,
	"./tzm": 475,
	"./tzm-latn": 474,
	"./tzm-latn.js": 474,
	"./tzm.js": 475,
	"./uk": 476,
	"./uk.js": 476,
	"./uz": 477,
	"./uz.js": 477,
	"./vi": 478,
	"./vi.js": 478,
	"./x-pseudo": 479,
	"./x-pseudo.js": 479,
	"./yo": 480,
	"./yo.js": 480,
	"./zh-cn": 481,
	"./zh-cn.js": 481,
	"./zh-hk": 482,
	"./zh-hk.js": 482,
	"./zh-tw": 483,
	"./zh-tw.js": 483
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 810;


/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = "/* selected box */\r\n.selected {\r\n    -webkit-transform: scale(0.75, 0.75);\r\n            transform: scale(0.75, 0.75);\r\n    -webkit-filter: grayscale(100%);\r\n    filter: grayscale(100%);\r\n}\r\n\r\n.matched {\r\n    -webkit-filter: grayscale(100%);\r\n    filter: grayscale(100%);\r\n}\r\n\r\n.full-hp {\r\n    height: 26px;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.half-hp {\r\n    height: 13px;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.zero-hp {\r\n    height: 1px;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n}"

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n    <!--restarter-->\n    <div class=\"row\">\n        <!--title-->\n        <div class=\"col-sm-12\" style=\"margin-top: 10px;\">\n            <p class=\"text-center mood\" style=\"text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.8);\n\tcolor: rgba(255, 255, 255, 0.5);\"><small>HOW DO YOU FEEL TODAY?</small></p>\n        </div>\n        \n        <!--mood selector-->\n        <div class=\"col-sm-12\">\n            <div class=\"box-container\" (click)=\"toggleHappy()\">\n                <div class=\"box-happy\" [ngClass]=\"{'selected': isHappy === true}\">\n                </div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleAngry()\">\n                <div class=\"box-angry\" [ngClass]=\"{'selected': isAngry === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleSad()\">\n                <div class=\"box-sad\" [ngClass]=\"{'selected': isSad === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleHypnotic()\">\n                <div class=\"box-hypnotic\" [ngClass]=\"{'selected': isHypnotic === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleRomantic()\">\n                <div class=\"box-romantic\" [ngClass]=\"{'selected': isRomantic === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleMysterious()\">\n                <div class=\"box-mysterious\" [ngClass]=\"{'selected': isMysterious === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleDoubtful()\">\n                <div class=\"box-doubtful\" [ngClass]=\"{'selected': isDoubtful === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleCool()\">\n                <div class=\"box-cool\" [ngClass]=\"{'selected': isCool === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleScared()\">\n                <div class=\"box-scared\" [ngClass]=\"{'selected': isScared === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleDumb()\">\n                <div class=\"box-dumb\" [ngClass]=\"{'selected': isDumb === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleTired()\">\n                <div class=\"box-tired\" [ngClass]=\"{'selected': isTired === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleAmazed()\">\n                <div class=\"box-amazed\" [ngClass]=\"{'selected': isAmazed === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleSick()\">\n                <div class=\"box-sick\" [ngClass]=\"{'selected': isSick === true}\"></div>\n            </div>\n            <div class=\"box-container\" (click)=\"toggleAlien()\">\n                <div class=\"box-alien\" [ngClass]=\"{'selected': isAlien === true}\"></div>\n            </div>\n        </div>\n\n        <!--scoreboard-->\n        <div class=\"floating-menu\">\n            <div>\n                <p class=\"text-center\"><small>HEALTH</small></p>\n            </div>\n            <div>\n                <div style=\"display: inline-block; height: 26px; width: 25px;\"><i class=\"fa fa-heartbeat pulse\" aria-hidden=\"true\" style=\"font-size: 1.75em; color: red\"></i></div>\n                <div [ngClass]=\"{'full-hp': playerErrors <= 4, 'half-hp': playerErrors > 4, 'zero-hp': playerErrors > 5}\" style=\"display: inline-block; width: 10px; margin-bottom: -4px; background-color: rgba(192,192,192, 1);\"></div>\n                <div [ngClass]=\"{'full-hp': playerErrors <= 2, 'half-hp': playerErrors > 2, 'zero-hp': playerErrors > 3}\" style=\"display: inline-block; width: 10px; margin-bottom: -4px; background-color: rgba(169,169,169, 1);\"></div>\n                <div [ngClass]=\"{'full-hp': playerErrors === 0, 'half-hp': playerErrors === 1, 'zero-hp': playerErrors > 1}\" style=\"display: inline-block; width: 10px; margin-bottom: -4px; background-color: rgba(128,128,128, 1)\"></div>\n            </div>\n            <br>\n            <div>\n                <p class=\"text-center\"><small>BEST</small></p>\n            </div>\n            <div>\n                <p class=\"text-center\"><small>{{bestScore}}</small></p>\n            </div>\n        </div>\n\n        <!--endgame-->\n        <div class=\"col-sm-12\" style=\"margin-top: 10px;\" [hidden]=\"!playerDied\">\n            <p class=\"text-center mood\">\n                <span style=\"text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3), 1px 1px 0px rgba(0, 0, 0, 0.8);\n\tcolor: rgba(255, 255, 255, 0.5);\">To start please select your mood tiles</span>\n            </p>\n        </div>\n\n        <!--first row of cards-->\n        <div class=\"col-sm-12\" [hidden] = \"!isElementSelected\">\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[0][0].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideRight': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[0][0].peek === true\" alt=\"\" src=\"{{cardMatrix[0][0].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[0][0].peek === false\" alt=\"\" src=\"{{cardMatrix[0][0].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[0][0].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(0,0)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[0][0].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[0][1].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideDown': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[0][1].peek === true\" alt=\"\" src=\"{{cardMatrix[0][1].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[0][1].peek === false\" alt=\"\" src=\"{{cardMatrix[0][1].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[0][1].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(0,1)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[0][1].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[0][2].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideDown': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[0][2].peek === true\" alt=\"\" src=\"{{cardMatrix[0][2].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[0][2].peek === false\" alt=\"\" src=\"{{cardMatrix[0][2].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[0][2].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(0,2)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[0][2].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[0][3].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideLeft': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[0][3].peek === true\" alt=\"\" src=\"{{cardMatrix[0][3].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[0][3].peek === false\" alt=\"\" src=\"{{cardMatrix[0][3].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[0][3].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(0,3)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[0][3].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--second row of cards-->\n        <div class=\"col-sm-12\" [hidden] = \"!isElementSelected\">\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[1][0].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideRight': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[1][0].peek === true\" alt=\"\" src=\"{{cardMatrix[1][0].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[1][0].peek === false\" alt=\"\" src=\"{{cardMatrix[1][0].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[1][0].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(1,0)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[1][0].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[1][1].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideRight': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[1][1].peek === true\" alt=\"\" src=\"{{cardMatrix[1][1].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[1][1].peek === false\" alt=\"\" src=\"{{cardMatrix[1][1].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[1][1].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(1,1)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[1][1].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[1][2].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideLeft': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[1][2].peek === true\" alt=\"\" src=\"{{cardMatrix[1][2].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[1][2].peek === false\" alt=\"\" src=\"{{cardMatrix[1][2].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[1][2].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(1,2)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[1][2].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[1][3].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideLeft': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[1][3].peek === true\" alt=\"\" src=\"{{cardMatrix[1][3].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[1][3].peek === false\" alt=\"\" src=\"{{cardMatrix[1][3].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[1][3].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(1,3)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[1][3].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--third row of cards-->\n        <div class=\"col-sm-12\" [hidden] = \"!isElementSelected\">\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[2][0].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideRight': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[2][0].peek === true\" alt=\"\" src=\"{{cardMatrix[2][0].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[2][0].peek === false\" alt=\"\" src=\"{{cardMatrix[2][0].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[2][0].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(2,0)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[2][0].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[2][1].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideUp': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[2][1].peek === true\" alt=\"\" src=\"{{cardMatrix[2][1].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[2][1].peek === false\" alt=\"\" src=\"{{cardMatrix[2][1].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[2][1].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(2,1)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[2][1].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[2][2].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideUp': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[2][2].peek === true\" alt=\"\" src=\"{{cardMatrix[2][2].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[2][2].peek === false\" alt=\"\" src=\"{{cardMatrix[2][2].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[2][2].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(2,2)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[2][2].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-3\" [ngClass]=\"{'matched': cardMatrix[2][3].matched === true}\">\n                <div class=\"card hovercard\" style=\"width: 200px;\" [ngClass]=\"{'slideLeft': isElementSelected === true}\">\n                    <div class=\"cardheader\">\n\n                    </div>\n                    <div class=\"avatar\">\n                        <img *ngIf=\"cardMatrix[2][3].peek === true\" alt=\"\" src=\"{{cardMatrix[2][3].srcReal}}\">\n                        <img *ngIf=\"cardMatrix[2][3].peek === false\" alt=\"\" src=\"{{cardMatrix[2][3].srcCover}}\">\n                    </div>\n                    <div class=\"info\">\n                        <div class=\"title\">\n                            <a>{{lastElementSelected}}</a>\n                        </div>\n                    </div>\n                    <div class=\"bottom\">\n                        <a *ngIf=\"unmaskDisabled === false && cardMatrix[2][3].matched === false\" class=\"btn btn-primary btn-sm\" (click)=\"toggleMask(2,3)\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === false && cardMatrix[2][3].matched === true\" class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                        <a disabled *ngIf=\"unmaskDisabled === true\" disabled class=\"btn btn-primary btn-sm\">\n                            <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"font-size: 1.75em; margin-left: -5px; margin-top: -2px; opacity: 0.85;\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ },

/***/ 875:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(548);


/***/ }

},[875]);
//# sourceMappingURL=main.bundle.map