"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var EmployeeComponent_1 = require("../Binder/EmployeeComponent");
var GridComponent_1 = require("./GridComponent");
var RandomComponent_1 = require("./RandomComponent");
var DateComponent_1 = require("./DateComponent");
//const randomFactory = () => { return Math.random(); };
var EmployeeModuleLibrary = (function () {
    function EmployeeModuleLibrary() {
    }
    return EmployeeModuleLibrary;
}());
EmployeeModuleLibrary = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [EmployeeComponent_1.EmployeeComponent, GridComponent_1.GridComponent, RandomComponent_1.RandomComponent, DateComponent_1.DateComponent],
        providers: [
            { provide: 'Random', useValue: Math.random() },
        ],
        bootstrap: [EmployeeComponent_1.EmployeeComponent]
    })
], EmployeeModuleLibrary);
exports.EmployeeModuleLibrary = EmployeeModuleLibrary;
//# sourceMappingURL=EmployeeModuleLibrary.js.map