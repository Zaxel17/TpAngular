import { Component, OnInit } from '@angular/core';
import { ConnectionService} from '../services/connection.service';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent implements OnInit {

  title: string;
  isconected: boolean;

  constructor(private connect: ConnectionService ) {
    this.isconected = connect.isconnected();
  }

  ngOnInit() {
  }

  disconnected() {
    this.connect.deconnect();
    this.isconected = this.connect.isconnected();
  }

  connection() {
    this.connect.connect();
    this.isconected = this.connect.isconnected();
  }
}
