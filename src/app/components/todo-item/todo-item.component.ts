import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;

  constructor() { }

  ngOnInit(): void {
  }

  //Set Dynamic Classes
  setClasses()
  {
    let classes= 
    {
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }

  OnToggle(todo)
  {
    console.log("Toggle the item !");
  }
  OnDelete(todo)
  {
    console.log("Delete the item !")
  }
}
