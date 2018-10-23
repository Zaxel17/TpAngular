import {User} from './user.model';

export class Todo {

  id: number;
  title: string;
  completed: boolean;
  idUser: User;

  constructor(id: number, title: string, completed: boolean = false, idU: User) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.idUser = idU;
  }
}
