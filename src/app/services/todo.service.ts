import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos()
  {
    return [
      {
        id: 1,
        title: 'Todos one',
        completed: false
      },
      {
        id: 2,
        title: 'Todos two',
        completed: true
      },
      {
        id: 3,
        title: 'Todos three',
        completed: false
      }
    ]
  }
}
