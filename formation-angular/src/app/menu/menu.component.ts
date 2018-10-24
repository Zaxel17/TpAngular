import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Array<string> = ['Tâche custom', 'Idée custom'];
  user: User;

  constructor() {
    this.user = new User(1, 'name', 'a@a');
  }

  ngOnInit() {
  }

}
