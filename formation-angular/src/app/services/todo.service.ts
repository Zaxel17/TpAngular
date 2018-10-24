import { Injectable } from '@angular/core';
import {Todo} from '../models/todo.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Array<Todo>;

  constructor() {
    const user = new User(99, 'no-name', 'a@a');
    this.todos = [
      {id: 1, title: 'Lire l\'énoncé', completed: true, idUser: user },
      {id: 2, title: 'Apprendre Angular', completed: false, idUser: user },
      {id: 3, title: 'Finir Kingdom Hearts 2 Final Mix', completed: false, idUser: user }
    ];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
