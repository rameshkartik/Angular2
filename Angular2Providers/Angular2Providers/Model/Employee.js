"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = (function () {
    function Employee() {
        this.EmployeeType = "Employee";
        this.EmployeeCode = 4040;
        this.EmployeeName = "Rameshkartik";
        this.City = "Chennai";
    }
    Employee.prototype.IsValidEmployee = function () {
        if (this.EmployeeType == "Employee" && this.City == "Chennai") {
            return true;
        }
        else {
            return false;
        }
    };
    return Employee;
}());
exports.Employee = Employee;
var HigherLevelEmployee = (function (_super) {
    __extends(HigherLevelEmployee, _super);
    function HigherLevelEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EmployeeType = "HighLevel";
        _this.EmployeeCode = 2020;
        _this.EmployeeName = "Ravi";
        _this.City = "Bangalore";
        return _this;
    }
    HigherLevelEmployee.prototype.IsValidEmployee = function () {
        if (this.EmployeeType == "HighLevel" && this.City == "Bangalore") {
            return true;
        }
        else {
            return false;
        }
    };
    return HigherLevelEmployee;
}(Employee));
exports.HigherLevelEmployee = HigherLevelEmployee;
//# sourceMappingURL=Employee.js.map