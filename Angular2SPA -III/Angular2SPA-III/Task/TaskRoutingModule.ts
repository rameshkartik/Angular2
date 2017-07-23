import { NgModule } from '@angular/core';
import { TaskListComponent } from './TaskListComponent';
import { TaskDetailComponent } from './TaskDetailComponent';
import { Routes, RouterModule } from '@angular/router';

const TaskRoutes: Routes = [
    { path: '/Tasks', component: TaskListComponent },
    { path: '/Task', component: TaskDetailComponent }
];


@NgModule(
    {
        imports: [RouterModule.forChild(TaskRoutes)],
        exports: [RouterModule]
    })
export class TaskRoutingModule {

}