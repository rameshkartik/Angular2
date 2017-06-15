"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonalDetails = (function () {
    function PersonalDetails() {
        this.City = "Chennai";
        this.Age = 24;
        this.BloodGroup = "O+ve";
    }
    PersonalDetails.prototype.getCity = function () {
        return this.City;
    };
    PersonalDetails.prototype.getAge = function () {
        return this.Age;
    };
    PersonalDetails.prototype.getBloodGroup = function () {
        return this.BloodGroup;
    };
    return PersonalDetails;
}());
exports.PersonalDetails = PersonalDetails;
//# sourceMappingURL=PersonalDetails.js.map