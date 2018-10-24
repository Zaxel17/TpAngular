import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user: User;

  constructor(private listeuser: UsersService) {
    this.user =  listeuser.getUsers()[2];
  }

  getCurrentUser() {
    return this.user;
  }

}
