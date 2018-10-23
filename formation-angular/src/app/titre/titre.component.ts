import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent implements OnInit {

  title: string;
  isconected: boolean;

  constructor() {
    this.title = 'D\'akor' ;
    this.isconected = false;
  }

  ngOnInit() {
  }

}
