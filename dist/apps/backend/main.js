/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/backend/src/backend.module.ts":
/*!********************************************!*\
  !*** ./apps/backend/src/backend.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackendModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const registration_module_1 = __webpack_require__(/*! ./registration/registration.module */ "./apps/backend/src/registration/registration.module.ts");
const healthcheck_1 = __webpack_require__(/*! @namnh240795/healthcheck */ "./libs/healthcheck/src/index.ts");
const prisma_1 = __webpack_require__(/*! @namnh240795/prisma */ "./libs/prisma/src/index.ts");
const sms_module_1 = __webpack_require__(/*! ./sms/sms.module */ "./apps/backend/src/sms/sms.module.ts");
let BackendModule = class BackendModule {
};
exports.BackendModule = BackendModule;
exports.BackendModule = BackendModule = __decorate([
    (0, common_1.Module)({
        imports: [healthcheck_1.HealthcheckModule, prisma_1.PrismaModule, registration_module_1.RegistrationModule, sms_module_1.SmsModule],
        controllers: [],
        providers: [],
    })
], BackendModule);


/***/ }),

/***/ "./apps/backend/src/registration/registration.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/backend/src/registration/registration.controller.ts ***!
  \******************************************************************/
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
exports.RegistrationController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const registration_service_1 = __webpack_require__(/*! ./registration.service */ "./apps/backend/src/registration/registration.service.ts");
let RegistrationController = class RegistrationController {
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
};
exports.RegistrationController = RegistrationController;
exports.RegistrationController = RegistrationController = __decorate([
    (0, common_1.Controller)('registration'),
    __metadata("design:paramtypes", [typeof (_a = typeof registration_service_1.RegistrationService !== "undefined" && registration_service_1.RegistrationService) === "function" ? _a : Object])
], RegistrationController);


/***/ }),

/***/ "./apps/backend/src/registration/registration.module.ts":
/*!**************************************************************!*\
  !*** ./apps/backend/src/registration/registration.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const registration_service_1 = __webpack_require__(/*! ./registration.service */ "./apps/backend/src/registration/registration.service.ts");
const registration_controller_1 = __webpack_require__(/*! ./registration.controller */ "./apps/backend/src/registration/registration.controller.ts");
let RegistrationModule = class RegistrationModule {
};
exports.RegistrationModule = RegistrationModule;
exports.RegistrationModule = RegistrationModule = __decorate([
    (0, common_1.Module)({
        controllers: [registration_controller_1.RegistrationController],
        providers: [registration_service_1.RegistrationService],
    })
], RegistrationModule);


/***/ }),

/***/ "./apps/backend/src/registration/registration.service.ts":
/*!***************************************************************!*\
  !*** ./apps/backend/src/registration/registration.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegistrationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let RegistrationService = class RegistrationService {
};
exports.RegistrationService = RegistrationService;
exports.RegistrationService = RegistrationService = __decorate([
    (0, common_1.Injectable)()
], RegistrationService);


/***/ }),

/***/ "./apps/backend/src/sms/sms.controller.ts":
/*!************************************************!*\
  !*** ./apps/backend/src/sms/sms.controller.ts ***!
  \************************************************/
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
exports.SmsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sms_service_1 = __webpack_require__(/*! ./sms.service */ "./apps/backend/src/sms/sms.service.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let SmsController = class SmsController {
    constructor(smsService) {
        this.smsService = smsService;
    }
    sendSMS() {
        return this.smsService.sendSMS();
    }
};
exports.SmsController = SmsController;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SmsController.prototype, "sendSMS", null);
exports.SmsController = SmsController = __decorate([
    (0, swagger_1.ApiTags)('sms'),
    (0, common_1.Controller)('sms'),
    __metadata("design:paramtypes", [typeof (_a = typeof sms_service_1.SmsService !== "undefined" && sms_service_1.SmsService) === "function" ? _a : Object])
], SmsController);


/***/ }),

/***/ "./apps/backend/src/sms/sms.module.ts":
/*!********************************************!*\
  !*** ./apps/backend/src/sms/sms.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sms_service_1 = __webpack_require__(/*! ./sms.service */ "./apps/backend/src/sms/sms.service.ts");
const sms_controller_1 = __webpack_require__(/*! ./sms.controller */ "./apps/backend/src/sms/sms.controller.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const events_1 = __webpack_require__(/*! @namnh240795/events */ "./libs/events/src/index.ts");
let SmsModule = class SmsModule {
};
exports.SmsModule = SmsModule;
exports.SmsModule = SmsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: events_1.SERVICE.SMS,
                    transport: microservices_1.Transport.REDIS,
                    options: {
                        host: 'localhost',
                        port: 6666,
                    },
                },
            ]),
        ],
        controllers: [sms_controller_1.SmsController],
        providers: [sms_service_1.SmsService],
    })
], SmsModule);


/***/ }),

/***/ "./apps/backend/src/sms/sms.service.ts":
/*!*********************************************!*\
  !*** ./apps/backend/src/sms/sms.service.ts ***!
  \*********************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const events_1 = __webpack_require__(/*! @namnh240795/events */ "./libs/events/src/index.ts");
let SmsService = class SmsService {
    constructor(client) {
        this.client = client;
    }
    sendSMS() {
        console.log('service send');
        this.client
            .send({ cmd: events_1.SMS_COMMAND.SEND }, { data: 'Hello' })
            .subscribe(() => { });
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(events_1.SERVICE.SMS)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], SmsService);


/***/ }),

/***/ "./libs/events/src/index.ts":
/*!**********************************!*\
  !*** ./libs/events/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAIL_COMMAND = exports.QUEUE = exports.SERVICE = exports.SMS_COMMAND = void 0;
var SMS_COMMAND;
(function (SMS_COMMAND) {
    SMS_COMMAND["SEND"] = "SEND_SMS";
    SMS_COMMAND["TRIGGER_SEND"] = "TRIGGER_SEND_SMS";
})(SMS_COMMAND || (exports.SMS_COMMAND = SMS_COMMAND = {}));
var SERVICE;
(function (SERVICE) {
    SERVICE["SMS"] = "SMS_SERVICE";
    SERVICE["MAIL"] = "MAIL_SERVICE";
})(SERVICE || (exports.SERVICE = SERVICE = {}));
var QUEUE;
(function (QUEUE) {
    QUEUE["MAIL"] = "MAIL_QUEUE";
    QUEUE["SMS"] = "SMS_QUEUE";
})(QUEUE || (exports.QUEUE = QUEUE = {}));
var MAIL_COMMAND;
(function (MAIL_COMMAND) {
    MAIL_COMMAND["SEND"] = "SEND_MAIL";
})(MAIL_COMMAND || (exports.MAIL_COMMAND = MAIL_COMMAND = {}));


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

/***/ "./libs/prisma/src/index.ts":
/*!**********************************!*\
  !*** ./libs/prisma/src/index.ts ***!
  \**********************************/
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
__exportStar(__webpack_require__(/*! ./prisma.module */ "./libs/prisma/src/prisma.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./prisma.service */ "./libs/prisma/src/prisma.service.ts"), exports);


/***/ }),

/***/ "./libs/prisma/src/prisma.module.ts":
/*!******************************************!*\
  !*** ./libs/prisma/src/prisma.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./libs/prisma/src/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);


/***/ }),

/***/ "./libs/prisma/src/prisma.service.ts":
/*!*******************************************!*\
  !*** ./libs/prisma/src/prisma.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Injectable)()
], PrismaService);


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

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

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
/*!**********************************!*\
  !*** ./apps/backend/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const backend_module_1 = __webpack_require__(/*! ./backend.module */ "./apps/backend/src/backend.module.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(backend_module_1.BackendModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Backend API')
        .setDescription('The Backend API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;