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
/*! exports provided: GusInfoPlugin, GusInfoDao, GusInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./src/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GusInfoPlugin", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["GusInfoPlugin"]; });

/* harmony import */ var _src_dao_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GusInfoDao", function() { return _src_dao_index__WEBPACK_IMPORTED_MODULE_1__["GusInfoDao"]; });

/* harmony import */ var _src_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/service */ "./src/service/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GusInfoService", function() { return _src_service__WEBPACK_IMPORTED_MODULE_2__["GusInfoService"]; });






/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! exports provided: GusInfoDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GusInfoDao", function() { return GusInfoDao; });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "inversify");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inversify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
/* harmony import */ var _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let GusInfoDao = class GusInfoDao {
    constructor(taskQueue) {
        this.taskQueue = taskQueue;
    }
    getCorporateInfo(taxvat) {
        return this.taskQueue.execute({
            url: _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_1__["URLTransform"].getAbsoluteApiUrl('/api/vendor/gus/' + taxvat),
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
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(_grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_1__["TaskQueue"])),
    __metadata("design:paramtypes", [Object])
], GusInfoDao);



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: GusInfoPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GusInfoPlugin", function() { return GusInfoPlugin; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/service/index.ts");
/* harmony import */ var _dao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");


/**
 * Libstorefront GUS plugin
 * adds functionality for fetching corporate info from GUS API.
 */
const GusInfoPlugin = ((libstorefront) => {
    libstorefront.getIOCContainer().bind(_dao__WEBPACK_IMPORTED_MODULE_1__["GusInfoDao"]).to(_dao__WEBPACK_IMPORTED_MODULE_1__["GusInfoDao"]);
    libstorefront.getIOCContainer().bind(_service__WEBPACK_IMPORTED_MODULE_0__["GusInfoService"]).to(_service__WEBPACK_IMPORTED_MODULE_0__["GusInfoService"]);
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! exports provided: GusInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GusInfoService", function() { return GusInfoService; });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "inversify");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inversify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
/* harmony import */ var _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
/* harmony import */ var _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_transform_corporate_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/transform-corporate-info */ "./src/utils/transform-corporate-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




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
                if (response && response.result && response.resultCode === _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_2__["HttpStatus"].OK) {
                    if (response.result instanceof Array && response.result.length > 0) {
                        const [data] = response.result;
                        const mapped = yield Object(_utils_transform_corporate_info__WEBPACK_IMPORTED_MODULE_3__["transformCorporateInfoToShippingData"])(data);
                        yield _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_2__["IOCContainer"].get(_grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"]).setPaymentDetails(mapped);
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
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(_dao__WEBPACK_IMPORTED_MODULE_1__["GusInfoDao"])),
    __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(_grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_2__["AbstractStore"])),
    __metadata("design:paramtypes", [_dao__WEBPACK_IMPORTED_MODULE_1__["GusInfoDao"],
        _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_2__["AbstractStore"]])
], GusInfoService);



/***/ }),

/***/ "./src/utils/transform-corporate-info.ts":
/*!***********************************************!*\
  !*** ./src/utils/transform-corporate-info.ts ***!
  \***********************************************/
/*! exports provided: transformCorporateInfoToShippingData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformCorporateInfoToShippingData", function() { return transformCorporateInfoToShippingData; });
/* harmony import */ var _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
/* harmony import */ var _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const transformCorporateInfoToShippingData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const country = yield _grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_0__["IOCContainer"].get(_grupakmk_libstorefront__WEBPACK_IMPORTED_MODULE_0__["CountriesService"]).getCountryById('PL');
    const [region] = country.available_regions.filter(r => r.name.toLowerCase() === data.province.toLowerCase());
    const shippingDetails = Object.assign(Object.assign(Object.assign({ city: data.city, apartmentNumber: data.apartmentNumber, taxId: data.nip, zipCode: data.zipCode, houseNo: data.propertyNumber, streetAddress: data.street, firstName: '', lastName: '', country: 'PL' }, (region && { region: region.name })), (region && { region_code: region.code })), (region && { region_id: region.id }));
    return shippingDetails;
});


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