"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../Model/Employee");
var Employee_2 = require("../Model/Employee");
var core_1 = require("@angular/core");
var FactoryEmployee = (function () {
    function FactoryEmployee() {
    }
    FactoryEmployee.prototype.Create = function (TypeOfEmployee) {
        if (TypeOfEmployee == "Employee") {
            return new Employee_1.Employee();
        }
        else {
            return new Employee_2.HigherLevelEmployee();
        }
    };
    return FactoryEmployee;
}());
FactoryEmployee = __decorate([
    core_1.Injectable()
], FactoryEmployee);
exports.FactoryEmployee = FactoryEmployee;
//# sourceMappingURL=FactoryEmployee.js.map