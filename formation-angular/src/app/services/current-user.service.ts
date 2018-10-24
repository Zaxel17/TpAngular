import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user: User;

  constructor() {
    this.user = new User(1, 'Billy', 'b@b.com');
  }

  getCurrentUser() {
    return this.user;
  }

}
