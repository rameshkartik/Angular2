import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './EmployeeListComponent';
import { TaskListComponent } from './TaskListComponent';
import { AppComponent } from './AppComponent';
import { PageNotFoundComponent } from './PageNotFoundComponent';

const appRoutes: Routes = [
    { path: 'EmployeeList', component: EmployeeListComponent },
    { path: 'TaskList', component: TaskListComponent },
    { path: '', redirectTo: '/EmployeesList', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }