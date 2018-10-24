import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo.model';
import {User} from '../models/user.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  listeTache: Array<Todo>;
  tableHeader: Array<string>;
  nouvelletache: string;
  isSelect: boolean;

  constructor() {
    this.listeTache = [];
    const user = new User(1, 'no-name', 'a@a');
    const tache1 = new Todo(1, 'Lire l\'énoncé', true, user);
    const tache2 = new Todo(2, 'Apprendre Angular', false , user);
    this.listeTache.push(tache1);
    this.listeTache.push(tache2);
    this.tableHeader = ['Nom de la tâche', 'Assignée à'];
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
    let id = this.listeTache[this.listeTache.length - 1].id + 1;
    const user = new User(1, 'no-name', 'a@a');
    let tach = new Todo(id, this.nouvelletache, false, user);
    this.listeTache.push(tach);
  }
}
