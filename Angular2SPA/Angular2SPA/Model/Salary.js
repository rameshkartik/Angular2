"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Salary = (function () {
    function Salary() {
        this.SalaryAmount = 10000;
        this.SalaryAccountType = "Salary A/c";
        this.SalaryAccountNumber = 150001;
    }
    Salary.prototype.getSalary = function () {
        return this.SalaryAmount;
    };
    Salary.prototype.getSalaryAccountType = function () {
        return this.SalaryAccountType;
    };
    Salary.prototype.getSalaryAccountNumber = function () {
        return this.SalaryAccountNumber;
    };
    return Salary;
}());
exports.Salary = Salary;
//# sourceMappingURL=Salary.js.map