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
var EmployeeComponent_1 = require("./EmployeeComponent");
var GridComponent_1 = require("./GridComponent");
var ContractEmployeeComponent_1 = require("./ContractEmployeeComponent");
var MainPageComponent_1 = require("./MainPageComponent");
var PermanentEmployeeComponent_1 = require("./PermanentEmployeeComponent");
var router_1 = require("@angular/router");
//import { ApplicationRoutes } from './Routing';
var ModuleLibrary = (function () {
    function ModuleLibrary() {
    }
    return ModuleLibrary;
}());
ModuleLibrary = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                { path: 'Employee', component: EmployeeComponent_1.EmployeeComponent },
                { path: 'PermanentEmployee', component: PermanentEmployeeComponent_1.PermanentEmployeeComponent }
            ]),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [EmployeeComponent_1.EmployeeComponent, GridComponent_1.GridComponent,
            ContractEmployeeComponent_1.ContractEmployeeComponent,
            PermanentEmployeeComponent_1.PermanentEmployeeComponent,
            MainPageComponent_1.MainPageComponent],
        bootstrap: [MainPageComponent_1.MainPageComponent]
    })
], ModuleLibrary);
exports.ModuleLibrary = ModuleLibrary;
//# sourceMappingURL=ModuleLibrary.js.map