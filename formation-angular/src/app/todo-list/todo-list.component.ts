import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model';
import {User} from '../models/user.model';
import {UsersService} from '../services/users.service';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  listeTache: Array<Todo>;
  tableHeader: Array<string>;
  nouvelletache: string;
  rowSelect: string;
  listUser: Array<User>;

  constructor(private listUsers: UsersService, private listtodos: TodoService) {
    this.listeTache = this.listtodos.getTodos();
    this.tableHeader = ['Nom de la tâche', 'Assignée à'];
    this.listUser = this.listUsers.getUsers();
  }

  ngOnInit() {
  }

  nbTofoLeft() {
    let nbleft = 0;
    this.listeTache.forEach(todo => {
      if (todo.completed) {
        nbleft++;
      }
    })
    return nbleft;
  }

  addTodo() {
    const id = this.listeTache[this.listeTache.length - 1].id + 1;
    const user = new User(1, 'no-name', 'a@a');
    const tach = new Todo(id, this.nouvelletache, false, user);
    this.listtodos.addTodo(tach);
    this.listeTache = this.listtodos.getTodos();
  }

  selectRow(todo) {
    if (this.rowSelect === todo.title) {
      this.rowSelect = null;
    } else {
      this.rowSelect = todo.title;
    }

  }

  inputClick($event) {
    $event.stopPropagation();

  }
}
