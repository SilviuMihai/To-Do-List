import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosLimit:string = '?_limit=5';
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http:HttpClient) { }

  //Get Todos  - Get Request
  getTodos():Observable<Todo[]>
  {
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle Completed  - Put Request
  toggleCompleted(todo:Todo):Observable<any>
  {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, this.httpOptions);
  }

  //Delete Todo - Delete Request
  deleteTodo(todo:Todo):Observable<Todo>
  {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,this.httpOptions);
  }

  //Add Todo - Post Request
  addTodo(todo:Todo):Observable<Todo>
  {
    const url = `${this.todosUrl}${this.todosLimit}`;
    return this.http.post<Todo>(url,todo,this.httpOptions);
  }
}
