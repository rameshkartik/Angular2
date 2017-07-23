import { Component } from '@angular/core';
import { EmployeeComponent } from '../Binder/EmployeeComponent';
import { PermanentEmployeeComponent } from '../Binder/PermanentEmployeeComponent';

export const ApplicationRoutes = [

    { path: 'Employee', component: EmployeeComponent },
    { path: 'PermanentEmployee', component: PermanentEmployeeComponent }
];
