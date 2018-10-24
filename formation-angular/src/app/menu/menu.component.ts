import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import { CurrentUserService } from '../services/current-user.service';
import { ConnectionService} from '../services/connection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Array<string> = ['Tâche custom', 'Idée custom'];
  user: User;
  isconected: boolean;

  constructor(currentUser: CurrentUserService, private connect: ConnectionService ) {
    this.user = currentUser.getCurrentUser();
    this.isconected = connect.isconnected();
  }

  ngOnInit() {
  }

}
