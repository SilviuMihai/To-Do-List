import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  //Set Dynamic Classes
  setClasses()
  {
    let classes= 
    {
      todo:true,
      'is-complete':this.todo.completed  //is-complete is a css selector
    }
    return classes;
  }

  OnToggle(todo)
  {
    //Toggle in UI
   todo.completed = !todo.completed;
    //Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe();
  }
  OnDelete(todo)
  {
    this.deleteTodo.emit(todo);
  }
}
