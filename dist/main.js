(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n    height: 100%;\r\n    width: 160px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 1.2rem;\r\n    color: #818181;\r\n    display: block;\r\n  }\r\n  \r\n  .sidenav a:hover {\r\n    color: #f1f1f1;\r\n  }\r\n  \r\n  .main {\r\n    margin-left: 160px; /* Same as the width of the sidenav */\r\n    font-size: 1rem; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n  }\r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <a routerLink=\"Home\">Dashboard</a>\n  <a routerLink=\"Booking\">Booking</a>\n  <a routerLink=\"Guest\">Guests</a>\n  <a routerLink=\"Payroll\">Payroll</a>\n  <a routerLink=\"Bill\">Bills & Invoices</a>\n  <a routerLink=\"Staff\">Staffs</a>\n  <a routerLink=\"Housekeeping\">Housekeeping</a>\n  <a routerLink=\"Report\">Reports</a>\n  <a routerLink=\"Create\">Account</a>\n  <a routerLink=\"Feedback\">Feedbacks</a>\n</div>\n<div class=\"main\">\n    <img src=\"../assets/icons8-hotel-96.png\" height=\"35\" width=\"35\">\n    <strong><span style=\"font-size:2rem;\">Delonix Regia Hotel</span></strong>\n    <br><br>\n    <div class=\"container\">\n    <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SwenApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _guest_guest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guest/guest.component */ "./src/app/guest/guest.component.ts");
/* harmony import */ var _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payroll/payroll.component */ "./src/app/payroll/payroll.component.ts");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/bill/bill.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _housekeeping_housekeeping_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./housekeeping/housekeeping.component */ "./src/app/housekeeping/housekeeping.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _staff_edit_staff_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./staff-edit/staff-edit.component */ "./src/app/staff-edit/staff-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _booking_booking_component__WEBPACK_IMPORTED_MODULE_6__["BookingComponent"],
                _guest_guest_component__WEBPACK_IMPORTED_MODULE_7__["GuestComponent"],
                _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_8__["PayrollComponent"],
                _bill_bill_component__WEBPACK_IMPORTED_MODULE_9__["BillComponent"],
                _staff_staff_component__WEBPACK_IMPORTED_MODULE_10__["StaffComponent"],
                _housekeeping_housekeeping_component__WEBPACK_IMPORTED_MODULE_11__["HousekeepingComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__["FeedbackComponent"],
                _staff_edit_staff_edit_component__WEBPACK_IMPORTED_MODULE_16__["StaffEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _guest_guest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guest/guest.component */ "./src/app/guest/guest.component.ts");
/* harmony import */ var _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payroll/payroll.component */ "./src/app/payroll/payroll.component.ts");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/bill/bill.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _housekeeping_housekeeping_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./housekeeping/housekeeping.component */ "./src/app/housekeeping/housekeeping.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _staff_edit_staff_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./staff-edit/staff-edit.component */ "./src/app/staff-edit/staff-edit.component.ts");

//import home components













var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'Booking', component: _booking_booking_component__WEBPACK_IMPORTED_MODULE_3__["BookingComponent"] },
    { path: 'Guest', component: _guest_guest_component__WEBPACK_IMPORTED_MODULE_4__["GuestComponent"] },
    { path: 'Payroll', component: _payroll_payroll_component__WEBPACK_IMPORTED_MODULE_5__["PayrollComponent"] },
    { path: 'Bill', component: _bill_bill_component__WEBPACK_IMPORTED_MODULE_6__["BillComponent"] },
    { path: 'Staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_7__["StaffComponent"] },
    { path: 'Housekeeping', component: _housekeeping_housekeeping_component__WEBPACK_IMPORTED_MODULE_8__["HousekeepingComponent"] },
    { path: 'Report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_9__["ReportComponent"] },
    { path: 'Create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"] },
    { path: 'Edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"] },
    { path: 'Feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_12__["FeedbackComponent"] },
    { path: 'StaffEdit', component: _staff_edit_staff_edit_component__WEBPACK_IMPORTED_MODULE_13__["StaffEditComponent"] },
    // redirect to home page on load
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/bill/bill.component.css":
/*!*****************************************!*\
  !*** ./src/app/bill/bill.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bill/bill.component.html":
/*!******************************************!*\
  !*** ./src/app/bill/bill.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h2>Generate Invoice</h2>\n    <br> First Name:\n    <input class=\"form-control\">\n    <br> Last Name:\n    <input class=\"form-control\">\n    <br> Nights Stayed:\n    <input class=\"form-control\">\n    <br> Additional Cost:\n    <input class=\"form-control\">\n    <br>\n    <button>Generate</button>\n  </div>\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-6\">\n    <h2>Preview</h2><br>\n    <div style='border:2px black solid;'>\n      <span>\n        First Name:John\n        <br> Last Name: Smith\n        <br> Number of Adults: 2\n        <br> Number of Children:1\n        <br> Nights Stayed: 2\n        <br> Additional Costs: Nil\n        <br> Total Price: $100\n        <br><br>\n      </span>\n    </div>\n    <button>Print</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bill/bill.component.ts":
/*!****************************************!*\
  !*** ./src/app/bill/bill.component.ts ***!
  \****************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillComponent = /** @class */ (function () {
    function BillComponent() {
    }
    BillComponent.prototype.ngOnInit = function () {
    };
    BillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill',
            template: __webpack_require__(/*! ./bill.component.html */ "./src/app/bill/bill.component.html"),
            styles: [__webpack_require__(/*! ./bill.component.css */ "./src/app/bill/bill.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BillComponent);
    return BillComponent;
}());



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/*!***********************************************!*\
  !*** ./src/app/booking/booking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/booking/booking.component.html":
/*!************************************************!*\
  !*** ./src/app/booking/booking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Booking</h2>\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      First Name:<br>\n      <input class=\"form-control\">\n      Last Name:<br>\n      <input class=\"form-control\">\n      Number of Adults:<br>\n      <input class=\"form-control\">\n      Number of Children:<br>\n      <input class=\"form-control\">\n      Email:<br>\n      <input class=\"form-control\">\n      Street Number:<br>\n      <input class=\"form-control\">\n      Block Number:<br>\n      <input class=\"form-control\">\n      Postal Code:<br>\n      <input class=\"form-control\">\n      Country:<br>\n      <input class=\"form-control\">\n    </div>\n    <div class=\"col-md-2\">\n      Credit Card Number:<br>\n      <input class=\"form-control\">\n      Credit Card Name:<br>\n      <input class=\"form-control\">\n      Credit Card Expiration Date:<br>\n      <input class=\"form-control\">\n      Additional Remarks:<br>\n      <input class=\"form-control\">\n      Type of Customer:<br>\n      <input class=\"form-control\">\n    </div>\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-3\">\n      Check In Date:\n      <br><br>\n      Check Out Date:\n    </div>\n    <div class=\"col-md-3\">\n      Room Number: <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingComponent = /** @class */ (function () {
    function BookingComponent() {
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/booking/booking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Create New Account</h2>\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <h5>New Account</h5>\n      Username:\n      <br>\n      <input class=\"form-control\"> Password:\n      <br>\n      <input class=\"form-control\"> Confirm Password:\n      <br>\n      <input class=\"form-control\"> Privileges\n      <br>\n      <select class=\"form-control\">\n        <option>Administrator</option>\n        <option>Staff</option>\n      </select>\n      <br>\n      <button>Update</button>\n    </div>\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-6\">\n      System Account Search:\n      <input class=\"form-control\">\n      <br> All Accounts:\n      <br>\n      <div style='border:2px black solid;'>\n        <span>\n          John Smith\n          <a routerLink=\"../Edit\">\n            <button>Edit</button>\n          </a>\n          <button>Delete</button>\n          <br> Will Smith\n          <a routerLink=\"../Edit\">\n            <button>Edit</button>\n          </a>\n          <button>Delete</button>\n          <br> Jaden Smith\n          <a routerLink=\"../Edit\">\n            <button>Edit</button>\n          </a>\n          <button>Delete</button>\n          <br>\n        </span>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Create New Account</h2>\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <h5>New Account</h5>\n      Username:\n      <br>\n      <input class=\"form-control\"> Password:\n      <br>\n      <input class=\"form-control\"> Confirm Password:\n      <br>\n      <input class=\"form-control\"> Privileges\n      <br>\n      <select class=\"form-control\">\n        <option>Administrator</option>\n        <option>Staff</option>\n      </select>\n      <br>\n      <button>Update</button>\n    </div>\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-6\">\n      Before Edits:\n      <br>\n      <div style='border:2px black solid;'>\n        <span>\n          First Name:John\n          <br> Username: Johnsmitch\n          <br> Password: P4ssw0rd\n          <br> Privileges: Management Team\n          <br>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    Guest Search:\n    <input class=\"form-control\">\n    <br> Results:\n    <br>\n    <select class=\"form-control\" size=\"4\">\n      <option>Noisy Staff</option>\n      <option>I like the chef's cooking!</option>\n      <option>Good Staff</option>\n      <option>What the staff!</option>\n    </select>\n  </div>\n  <div class=\"col-md-6\">\n    Before Edits:\n    <br>\n    <div style='border:2px black solid;'>\n      <span>\n        UserID: G0234\n        <br> Subject: What the staff!\n        <br> Feedback: What is the staff doing! He serves good quality food and is kind! Would come again!\n        <br> Ratings: 5 Stars\n        <br><br><br><br>\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/guest/guest.component.css":
/*!*******************************************!*\
  !*** ./src/app/guest/guest.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/guest/guest.component.html":
/*!********************************************!*\
  !*** ./src/app/guest/guest.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Guests</h2>\n  <div class=\"row\">\n  <div class=\"col-md-2\">\n      First Name:<br>\n      <input class=\"form-control\">\n      Last Name:<br>\n      <input class=\"form-control\">\n      Number of Adults:<br>\n      <input class=\"form-control\">\n      Number of Children:<br>\n      <input class=\"form-control\">\n      Contact Number:<br>\n      <input class=\"form-control\">\n      Email:<br>\n      <input class=\"form-control\">\n      Street Number:<br>\n      <input class=\"form-control\">\n      Block Number:<br>\n      <input class=\"form-control\">\n      Postal Code:<br>\n      <input class=\"form-control\">\n      Country:<br>\n      <input class=\"form-control\">\n    </div>\n    <div class=\"col-md-2\">\n      Credit Card Number:<br>\n      <input class=\"form-control\">\n      Credit Card Name:<br>\n      <input class=\"form-control\">\n      Credit Card Expiration Date:<br>\n      <input class=\"form-control\">\n      Additional Remarks:<br>\n      <input class=\"form-control\">\n      Type of Customer:<br>\n      <input class=\"form-control\">\n      <br>\n      <button>Update</button>\n    </div>\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-6\">\n      Guest Search: <input class=\"form-control\"><br>\n      Results:<br>\n      <select class=\"form-control\" size=\"4\">\n          <option>John Smith</option>\n          <option>Big Baller Ben</option>\n          <option>Ong Ming Feng</option>\n          <option>Ong Jing Fu</option>\n        </select>\n        <br>\n      Before Edits:<br>\n      <div style='border:2px black solid;'>\n      <span>\n        First Name:John<br>\n        Last Name: Smith<br>\n        Number of Adults: 2<br>\n        Number of Children:1<br>\n        Contact Number: 9234 1234<br>\n        Email: jhnsmith@email.com<br>\n        Street Name: Singapore Ave 1<br>\n        Block Number: Blk 175C<br>\n        Postal Code: 823175<br>\n        Country: Singapore<br>\n        Credit Card Number: 1235 1234 1245<br>\n        Credit Card Name: John Smith<br>\n        Credit Card Expiry Date: 15/3/19<br>\n        Additional Remarks: Nil<br>\n        Check in Date: 10/10/18<br>\n        Check out Date: 12/10/18<br>\n        Room Number: Room 101<br>\n      </span></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/guest/guest.component.ts":
/*!******************************************!*\
  !*** ./src/app/guest/guest.component.ts ***!
  \******************************************/
/*! exports provided: GuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestComponent", function() { return GuestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuestComponent = /** @class */ (function () {
    function GuestComponent() {
    }
    GuestComponent.prototype.ngOnInit = function () {
    };
    GuestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guest',
            template: __webpack_require__(/*! ./guest.component.html */ "./src/app/guest/guest.component.html"),
            styles: [__webpack_require__(/*! ./guest.component.css */ "./src/app/guest/guest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GuestComponent);
    return GuestComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    width:30vw;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Dashboard</h2>\n  <div class=\"row\" style=\"text-align:center; width:70vw;\">\n    <div class=\"card col-md-4\">\n      <h5 clss=\"card-title\">Staffs on Duty</h5>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          5\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"../assets/icons8-people-60.png\" width=\"60\" height=\"60\">\n        </div>\n      </div>\n    </div>\n    <div class=\"card col-md-4\">\n        <h5 clss=\"card-title\">Room Vacant</h5>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          24\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"../assets/icons8-room-filled-100.png\" width=\"60\" height=\"60\">\n        </div>\n      </div>\n    </div>\n    <div class=\"card col-md-4\">\n        <h5 clss=\"card-title\">Guests</h5>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          159\n        </div>\n        <div class=\"col-md-6\">\n          <img class=\"card-img-right\" src=\"../assets/icons8-account-filled-100.png\" width=\"60\" height=\"60\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <br><br>\n<div class=\"row\" style=\"width:70vw;\">\n  <div class=\"col-md-6\">\n    <h5>Occupancy</h5>\n  </div>\n  <div class=\"col-md-6\">\n  <h5>Latest Bookings</h5>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/housekeeping/housekeeping.component.css":
/*!*********************************************************!*\
  !*** ./src/app/housekeeping/housekeeping.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/housekeeping/housekeeping.component.html":
/*!**********************************************************!*\
  !*** ./src/app/housekeeping/housekeeping.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2>Housekeeping</h2>\n    Room Number:\n    <br>\n    <input class=\"form-control\"> Time:\n    <br>\n    <input class=\"form-control\"> Staff Name:\n    <br>\n    <input class=\"form-control\">\n    <br>\n    <button>Schedule</button>\n  </div>\n  <div class=\"col-md-6\">\n    <h2>Rooms Schedules</h2>\n    <div style='border:2px black solid;'>\n      <div class=\"row\">\n        <h5 class=\"col-md-3\">\n          Room Number\n        </h5>\n        <h5 class=\"col-md-3\">\n          Time\n        </h5>\n        <h5 class=\"col-md-3\">\n          By\n        </h5>\n        <h5 class=\"col-md-3\">\n          Ready\n        </h5>\n      </div>\n      <div class=\"row\">\n        <span class=\"col-md-3\">\n          Room 101\n        </span>\n        <span class=\"col-md-3\">\n          10:00 am\n        </span>\n        <span class=\"col-md-3\">\n          John Smith\n        </span>\n        <span class=\"col-md-3\">\n          Ready\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/housekeeping/housekeeping.component.ts":
/*!********************************************************!*\
  !*** ./src/app/housekeeping/housekeeping.component.ts ***!
  \********************************************************/
/*! exports provided: HousekeepingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousekeepingComponent", function() { return HousekeepingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HousekeepingComponent = /** @class */ (function () {
    function HousekeepingComponent() {
    }
    HousekeepingComponent.prototype.ngOnInit = function () {
    };
    HousekeepingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-housekeeping',
            template: __webpack_require__(/*! ./housekeeping.component.html */ "./src/app/housekeeping/housekeeping.component.html"),
            styles: [__webpack_require__(/*! ./housekeeping.component.css */ "./src/app/housekeeping/housekeeping.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HousekeepingComponent);
    return HousekeepingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 0 auto;height:70vh; width: auto; background-color:white; text-align:center\">\n    <h1 style=\"margin:0 auto;\">Login</h1><br>\n    <span style=\"margin:0 auto;\">Username:</span><input><br>\n    <span style=\"margin:0 auto;\">Password:</span><input><br>\n    <button style=\"margin:0 auto;\" routerLink=\"Home\">Login</button>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/payroll/payroll.component.css":
/*!***********************************************!*\
  !*** ./src/app/payroll/payroll.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payroll/payroll.component.html":
/*!************************************************!*\
  !*** ./src/app/payroll/payroll.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>New Payroll</h2><br>\n  Staff ID:\n  <input class=\"form-control\"><br>\n  Pay Amount:\n  <input class=\"form-control\"><br>\n  Date Paid:\n  <input class=\"form-control\">\n  \n</div>"

/***/ }),

/***/ "./src/app/payroll/payroll.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payroll/payroll.component.ts ***!
  \**********************************************/
/*! exports provided: PayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollComponent", function() { return PayrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PayrollComponent = /** @class */ (function () {
    function PayrollComponent() {
    }
    PayrollComponent.prototype.ngOnInit = function () {
    };
    PayrollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payroll',
            template: __webpack_require__(/*! ./payroll.component.html */ "./src/app/payroll/payroll.component.html"),
            styles: [__webpack_require__(/*! ./payroll.component.css */ "./src/app/payroll/payroll.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PayrollComponent);
    return PayrollComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2>Reports</h2>\n    <h4>Generate:</h4>\n    <button>Payroll Receipt</button><br>\n    <button>Room Status Report</button><br>\n    <button>Room Occupancy Report (Day)</button><br>\n    <button>Room Occupancy Report (Week)</button><br>\n    <button>Room Occupancy Report (Month)</button><br>\n    <button>Room Occupancy Report (Year)</button><br>\n    <button>Housekeeping Schedule (Day)</button><br>\n    <button>Housekeeping Schedule (Week)</button><br>\n    <button>Housekeeping Schedule (Month)</button><br>\n    <button>Hotel Statistics for Month</button><br>\n    <button>List all Guests in all Rooms</button><br><br>\n    <h4>Search for Guests in Room:</h4>\n    <input class=\"form-control\" placeholder=\"Room Number\">\n    <button>Search</button>\n  </div>\n  <div class=\"col-md-6\">\n      <h2>Rooms Schedules</h2>\n      <div style='border:2px black solid; height:25rem;'></div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <button style=\"width:100%\">Print</button>\n        </div>\n        <div class=\"col-md-6\">\n          <button style=\"width:100%\">Export to Excel</button>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/staff-edit/staff-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/staff-edit/staff-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/staff-edit/staff-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/staff-edit/staff-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Register Staff</h2>\n    <div class=\"row\">\n    <div class=\"col-md-2\">\n        Staff Name:<br>\n        <input class=\"form-control\">\n        Contact Number:<br>\n        <input class=\"form-control\">\n        Email:<br>\n        <input class=\"form-control\">\n        Street Number:<br>\n        <input class=\"form-control\">\n        Block Number:<br>\n        <input class=\"form-control\">\n        Postal Code:<br>\n        <input class=\"form-control\">\n        Country:<br>\n        <input class=\"form-control\">\n        Date of Birth:<br>\n        <input class=\"form-control\">\n      </div>\n      <div class=\"col-md-2\">\n        Credit Card Number:<br>\n        <input class=\"form-control\">\n        Credit Card Name:<br>\n        <input class=\"form-control\">\n        Credit Card Expiration Date:<br>\n        <input class=\"form-control\">\n        Duties:<br>\n        <input class=\"form-control\">\n        <!-- Use option for duties -->\n        Salary:<br>\n        <input type=\"number\" class=\"form-control\"><br>\n        <button>Save</button>\n      </div>\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-6\">\n        Before Edits:<br>\n        <div style='border:2px black solid;'>\n        <span>\n          First Name:John<br>\n          Contact Number: 9234 1234<br>\n          Email: jhnsmith@email.com<br>\n          Street Name: Singapore Ave 1<br>\n          Block Number: Blk 175C<br>\n          Postal Code: 823175<br>\n          Country: Singapore<br>\n          Date of Birth: 09/11/2000<br>\n          Credit Card Number: 1235 1234 1245<br>\n          Credit Card Name: John Smith<br>\n          Credit Card Expiry Date: 15/3/19<br>\n          Duties: Housekeeping Manager<br>\n          Salary: $2,500<br>\n        </span></div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/staff-edit/staff-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/staff-edit/staff-edit.component.ts ***!
  \****************************************************/
/*! exports provided: StaffEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffEditComponent", function() { return StaffEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffEditComponent = /** @class */ (function () {
    function StaffEditComponent() {
    }
    StaffEditComponent.prototype.ngOnInit = function () {
    };
    StaffEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-edit',
            template: __webpack_require__(/*! ./staff-edit.component.html */ "./src/app/staff-edit/staff-edit.component.html"),
            styles: [__webpack_require__(/*! ./staff-edit.component.css */ "./src/app/staff-edit/staff-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffEditComponent);
    return StaffEditComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff.component.css":
/*!*******************************************!*\
  !*** ./src/app/staff/staff.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/staff/staff.component.html":
/*!********************************************!*\
  !*** ./src/app/staff/staff.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Register Staff</h2>\n    <div class=\"row\">\n    <div class=\"col-md-2\">\n        Staff Name:<br>\n        <input class=\"form-control\">\n        Contact Number:<br>\n        <input class=\"form-control\">\n        Email:<br>\n        <input class=\"form-control\">\n        Street Number:<br>\n        <input class=\"form-control\">\n        Block Number:<br>\n        <input class=\"form-control\">\n        Postal Code:<br>\n        <input class=\"form-control\">\n        Country:<br>\n        <input class=\"form-control\">\n        Date of Birth:<br>\n        <input class=\"form-control\">\n      </div>\n      <div class=\"col-md-2\">\n        Credit Card Number:<br>\n        <input class=\"form-control\">\n        Credit Card Name:<br>\n        <input class=\"form-control\">\n        Credit Card Expiration Date:<br>\n        <input class=\"form-control\">\n        Duties:<br>\n        <input class=\"form-control\">\n        <!-- Use option for duties -->\n        Salary:<br>\n        <input type=\"number\" class=\"form-control\">\n        <button>Register</button>\n      </div>\n      <div class=\"col-md-2\"></div>\n      <div class=\"col-md-6\">\n        Staff Search: <input class=\"form-control\"><br>\n        All Staffs:<br>\n        <div style='border:2px black solid;'>\n        <span>\n          John Smith <a routerLink=\"../StaffEdit\"><button>Edit</button></a><button>Delete</button><br>\n          Will Smith<a routerLink=\"../StaffEdit\"><button>Edit</button></a><button>Delete</button><br>\n          Jaden Smith<a routerLink=\"../StaffEdit\"><button>Edit</button></a><button>Delete</button><br>\n        </span></div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaffComponent = /** @class */ (function () {
    // myForm: FormGroup;
    function StaffComponent(router) {
        this.router = router;
    }
    StaffComponent.prototype.ngOnInit = function () {
        // this.myForm = this.fb.group ({
        //   staffName: '',
        //   phoneNumber: '',
        //   email: '',
        //   streetName: '',
        //   blkNumber: '',
        //   postalCode: '',
        //   country: '',
        //   dateOfBirth: '',
        //   ccNum: '',
        //   ccName: '',
        //   ccExpirationDate: '',
        //   duties: '',
        //   salary: '',
        //   password: '',
        //   role: ''
        //   });
    };
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/staff/staff.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Toma\angular-apps\swenapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map