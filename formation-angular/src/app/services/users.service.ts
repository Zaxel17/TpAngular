import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Array<User>;

  constructor() {
    this.users = [
      {id: 1, name: 'Eren', email: 'e@e.com'},
      {id: 2, name: 'Mikasa', email: 'm@m.com'},
      {id: 3, name: 'Historia', email: 'h@h.com'},
      {id: 4, name: 'Levy', email: 'l@l.com'}
    ];
  }

  getUsers() {
    return this.users;
  }
}
