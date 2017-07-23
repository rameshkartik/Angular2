import { Injectable } from '@angular/core';
import { Task } from './Task';

let Tasks = [
    new Task(100, 'Task 1'),
    new Task(101, 'Task 2'),
    new Task(102, 'Task 3'),
    new Task(103, 'Task 4'),
    new Task(104, 'Task 5')

];

let TasksPromise = Promise.resolve(Tasks);

@Injectable()
export class TaskService {

    getTasks() {
        return TasksPromise;
    }

    getTask(taskId: number | string) {
       return  TasksPromise.then(Tasks => Tasks.find(Task => Task.TaskId === +taskId));
    }


}