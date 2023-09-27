import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let todo of todos" >
        {{ todo.title }} - {{ todo.completed ? 'Completed' : 'Not Completed' }}
        <button (click)="markCompleted(todo)">Mark Completed</button>
      </li>
    </ul>
  `,
})
export class AppComponent {
  todos: { title: string; completed: boolean }[] = [
    { title: 'Buy groceries', completed: false },
    { title: 'Finish work report', completed: false },
    { title: 'Go for a run', completed: true },
  ];

  markCompleted(todo: { title: string; completed: boolean }) {
    todo.completed = true;
  }
}
