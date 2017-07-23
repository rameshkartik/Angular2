"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Allowance = (function () {
    function Allowance() {
        this.HRA = 5000;
        this.TravelAllowance = 20000;
        this.MobileBillAllowance = 4000;
    }
    Allowance.prototype.getHRA = function () {
        return this.HRA;
    };
    Allowance.prototype.getTravelAllowance = function () {
        return this.TravelAllowance;
    };
    Allowance.prototype.getMobileBillAllowance = function () {
        return this.MobileBillAllowance;
    };
    return Allowance;
}());
exports.Allowance = Allowance;
//# sourceMappingURL=Allowance.js.map