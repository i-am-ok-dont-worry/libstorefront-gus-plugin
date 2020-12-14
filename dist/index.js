(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("GusInfoPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["GusInfoPlugin"] = factory();
	else
		root["GusInfoPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GusInfoService = exports.GusInfoDao = exports.GusInfoPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "GusInfoPlugin", { enumerable: true, get: function () { return index_1.GusInfoPlugin; } });
var index_2 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "GusInfoDao", { enumerable: true, get: function () { return index_2.GusInfoDao; } });
var service_1 = __webpack_require__(/*! ./src/service */ "./src/service/index.ts");
Object.defineProperty(exports, "GusInfoService", { enumerable: true, get: function () { return service_1.GusInfoService; } });


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GusInfoDao = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
let GusInfoDao = class GusInfoDao {
    constructor(taskQueue) {
        this.taskQueue = taskQueue;
    }
    getCorporateInfo(taxvat) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/gus/' + taxvat),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }
};
GusInfoDao = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
    __metadata("design:paramtypes", [Object])
], GusInfoDao);
exports.GusInfoDao = GusInfoDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GusInfoPlugin = void 0;
const service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
const dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
/**
 * Libstorefront GUS plugin
 * adds functionality for fetching corporate info from GUS API.
 */
exports.GusInfoPlugin = ((libstorefront) => {
    libstorefront.getIOCContainer().bind(dao_1.GusInfoDao).to(dao_1.GusInfoDao);
    libstorefront.getIOCContainer().bind(service_1.GusInfoService).to(service_1.GusInfoService);
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GusInfoService = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
const libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
const transform_corporate_info_1 = __webpack_require__(/*! ../utils/transform-corporate-info */ "./src/utils/transform-corporate-info.ts");
let GusInfoService = class GusInfoService {
    constructor(gusInfoDao, store) {
        this.gusInfoDao = gusInfoDao;
        this.store = store;
    }
    /**
     * Returns corporate info by taxvat nunber
     * @param taxvat
     */
    getCorporateInfo(taxvat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.gusInfoDao.getCorporateInfo(taxvat);
                if (response && response.result && response.resultCode === libstorefront_1.HttpStatus.OK) {
                    if (response.result instanceof Array && response.result.length > 0) {
                        const [data] = response.result;
                        const mapped = yield transform_corporate_info_1.transformCorporateInfoToShippingData(data);
                        yield libstorefront_1.IOCContainer.get(libstorefront_1.CheckoutService).setPaymentDetails(mapped);
                        return Object.assign(Object.assign({}, response.result[0]), mapped);
                    }
                    else {
                        return response.result.length === 0 ? null : response.result;
                    }
                }
            }
            catch (e) {
                return null;
            }
        });
    }
};
GusInfoService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(dao_1.GusInfoDao)),
    __param(1, inversify_1.inject(libstorefront_1.AbstractStore)),
    __metadata("design:paramtypes", [dao_1.GusInfoDao,
        libstorefront_1.AbstractStore])
], GusInfoService);
exports.GusInfoService = GusInfoService;


/***/ }),

/***/ "./src/utils/transform-corporate-info.ts":
/*!***********************************************!*\
  !*** ./src/utils/transform-corporate-info.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCorporateInfoToShippingData = void 0;
const libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
const libstorefront_2 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
const transformCorporateInfoToShippingData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const country = yield libstorefront_1.IOCContainer.get(libstorefront_2.CountriesService).getCountryById('PL');
    const [region] = country.available_regions.filter(r => r.name.toLowerCase() === data.province.toLowerCase());
    const shippingDetails = Object.assign(Object.assign(Object.assign({ city: data.city, apartmentNumber: data.apartmentNumber, taxId: data.nip, zipCode: data.zipCode, houseNo: data.propertyNumber, streetAddress: data.street, firstName: '', lastName: '', country: 'PL' }, (region && { region: region.name })), (region && { region_code: region.code })), (region && { region_id: region.id }));
    return shippingDetails;
});
exports.transformCorporateInfoToShippingData = transformCorporateInfoToShippingData;


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map