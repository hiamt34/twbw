/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/cache/src/caching.controller.ts":
/*!**********************************************!*\
  !*** ./apps/cache/src/caching.controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CachingController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const caching_service_1 = __webpack_require__(/*! ./caching.service */ "./apps/cache/src/caching.service.ts");
let CachingController = class CachingController {
    constructor(cachingService) {
        this.cachingService = cachingService;
    }
    getHello() {
        return this.cachingService.getHello();
    }
};
exports.CachingController = CachingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CachingController.prototype, "getHello", null);
exports.CachingController = CachingController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof caching_service_1.CachingService !== "undefined" && caching_service_1.CachingService) === "function" ? _a : Object])
], CachingController);


/***/ }),

/***/ "./apps/cache/src/caching.module.ts":
/*!******************************************!*\
  !*** ./apps/cache/src/caching.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CachingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const caching_controller_1 = __webpack_require__(/*! ./caching.controller */ "./apps/cache/src/caching.controller.ts");
const caching_service_1 = __webpack_require__(/*! ./caching.service */ "./apps/cache/src/caching.service.ts");
const healthcheck_1 = __webpack_require__(/*! @namnh240795/healthcheck */ "./libs/healthcheck/src/index.ts");
let CachingModule = class CachingModule {
};
exports.CachingModule = CachingModule;
exports.CachingModule = CachingModule = __decorate([
    (0, common_1.Module)({
        imports: [healthcheck_1.HealthcheckModule],
        controllers: [caching_controller_1.CachingController],
        providers: [caching_service_1.CachingService],
    })
], CachingModule);


/***/ }),

/***/ "./apps/cache/src/caching.service.ts":
/*!*******************************************!*\
  !*** ./apps/cache/src/caching.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CachingService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CachingService = class CachingService {
    getHello() {
        return 'Hello World!';
    }
};
exports.CachingService = CachingService;
exports.CachingService = CachingService = __decorate([
    (0, common_1.Injectable)()
], CachingService);


/***/ }),

/***/ "./libs/healthcheck/src/healthcheck.controller.ts":
/*!********************************************************!*\
  !*** ./libs/healthcheck/src/healthcheck.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.healthcheckController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const healthcheck_service_1 = __webpack_require__(/*! ./healthcheck.service */ "./libs/healthcheck/src/healthcheck.service.ts");
class HealthcheckRes {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], HealthcheckRes.prototype, "message", void 0);
let healthcheckController = class healthcheckController {
    constructor(healthCheckService) {
        this.healthCheckService = healthCheckService;
    }
    getHealthCheck() {
        return this.healthCheckService.getHealthcheck();
    }
};
exports.healthcheckController = healthcheckController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, type: HealthcheckRes }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", HealthcheckRes)
], healthcheckController.prototype, "getHealthCheck", null);
exports.healthcheckController = healthcheckController = __decorate([
    (0, swagger_1.ApiTags)('/healthcheck'),
    (0, common_1.Controller)('healthcheck'),
    __metadata("design:paramtypes", [typeof (_a = typeof healthcheck_service_1.HealthcheckService !== "undefined" && healthcheck_service_1.HealthcheckService) === "function" ? _a : Object])
], healthcheckController);


/***/ }),

/***/ "./libs/healthcheck/src/healthcheck.module.ts":
/*!****************************************************!*\
  !*** ./libs/healthcheck/src/healthcheck.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthcheckModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const healthcheck_service_1 = __webpack_require__(/*! ./healthcheck.service */ "./libs/healthcheck/src/healthcheck.service.ts");
const healthcheck_controller_1 = __webpack_require__(/*! ./healthcheck.controller */ "./libs/healthcheck/src/healthcheck.controller.ts");
let HealthcheckModule = class HealthcheckModule {
};
exports.HealthcheckModule = HealthcheckModule;
exports.HealthcheckModule = HealthcheckModule = __decorate([
    (0, common_1.Module)({
        providers: [healthcheck_service_1.HealthcheckService],
        controllers: [healthcheck_controller_1.healthcheckController],
    })
], HealthcheckModule);


/***/ }),

/***/ "./libs/healthcheck/src/healthcheck.service.ts":
/*!*****************************************************!*\
  !*** ./libs/healthcheck/src/healthcheck.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthcheckService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let HealthcheckService = class HealthcheckService {
    getHealthcheck() {
        return { message: 'OK' };
    }
};
exports.HealthcheckService = HealthcheckService;
exports.HealthcheckService = HealthcheckService = __decorate([
    (0, common_1.Injectable)()
], HealthcheckService);


/***/ }),

/***/ "./libs/healthcheck/src/index.ts":
/*!***************************************!*\
  !*** ./libs/healthcheck/src/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./healthcheck.module */ "./libs/healthcheck/src/healthcheck.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./healthcheck.service */ "./libs/healthcheck/src/healthcheck.service.ts"), exports);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./apps/cache/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const caching_module_1 = __webpack_require__(/*! ./caching.module */ "./apps/cache/src/caching.module.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(caching_module_1.CachingModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Cache API')
        .setDescription('The Cache API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3001);
}
bootstrap();

})();

/******/ })()
;