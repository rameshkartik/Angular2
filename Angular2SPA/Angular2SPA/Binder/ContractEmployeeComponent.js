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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Allowance_1 = require("../Model/Allowance");
var Salary_1 = require("../Model/Salary");
var PersonalDetails_1 = require("../Model/PersonalDetails");
var ContractEmployee_1 = require("../Model/ContractEmployee");
//var injector = ReflectiveInjector.resolveAndCreate([
//    ContractEmployee,
//    Allowance,
//    Salary,
//    PersonalDetails]);
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: ContractEmployee_1.ContractEmployee, useClass: ContractEmployee_1.ContractEmployee },
    { provide: Allowance_1.Allowance, useClass: Allowance_1.Allowance },
    { provide: Salary_1.Salary, useClass: Salary_1.Salary },
    { provide: PersonalDetails_1.PersonalDetails, useClass: PersonalDetails_1.PersonalDetails }
]);
var ContractEmployeeComponent = (function () {
    function ContractEmployeeComponent() {
        this.Name = "";
        this.EmpCode = 0;
        this.SalaryAccType = "";
        this.SalaryAccNumber = 0;
        this.SalaryAmount = 0;
        this.HRA = 0;
        this.TravelAllowance = 0;
        this.MobileAllowance = 0;
        this.City = "";
        this.Age = 0;
        this.BloodGroup = "";
        this.contractEmpObj = injector.get(ContractEmployee_1.ContractEmployee);
        this.Name = this.contractEmpObj.getEmployeeName();
        this.EmpCode = this.contractEmpObj.getEmployeeCode();
        this.SalaryAccType = this.contractEmpObj.Salary_Obj.getSalaryAccountType();
        this.SalaryAccNumber = this.contractEmpObj.Salary_Obj.getSalaryAccountNumber();
        this.SalaryAmount = this.contractEmpObj.Salary_Obj.getSalary();
        this.HRA = this.contractEmpObj.Allowance_Obj.getHRA();
        this.TravelAllowance = this.contractEmpObj.Allowance_Obj.getTravelAllowance();
        this.MobileAllowance = this.contractEmpObj.Allowance_Obj.getMobileBillAllowance();
        this.City = this.contractEmpObj.PersonalDet_Obj.getCity();
        this.Age = this.contractEmpObj.PersonalDet_Obj.getAge();
        this.BloodGroup = this.contractEmpObj.PersonalDet_Obj.getBloodGroup();
    }
    return ContractEmployeeComponent;
}());
ContractEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'ContractEmployee-ui',
        template: '<div>' +
            'EmployeeName : {{ Name }} <br/> ' +
            'EmployeeCode:  {{EmpCode }} <br/> ' +
            'SalaryAccountType:  {{SalaryAccType }} <br/> ' +
            'AccountNumber:  {{SalaryAccNumber }} <br/> ' +
            'Salary:  {{SalaryAmount }} <br/> ' +
            'HRA:  {{HRA }} <br/> ' +
            'TravelAllowance:  {{TravelAllowance }} <br/> ' +
            'MobileAllowance:  {{MobileAllowance }} <br/> ' +
            'City:  {{City }} <br/> ' +
            'Age:  {{Age }} <br/> ' +
            'BloodGroup:  {{BloodGroup }} <br/> ' +
            '</div> '
    }),
    __metadata("design:paramtypes", [])
], ContractEmployeeComponent);
exports.ContractEmployeeComponent = ContractEmployeeComponent;
//# sourceMappingURL=ContractEmployeeComponent.js.map