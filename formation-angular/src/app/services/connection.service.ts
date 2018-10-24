import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {


  private isConnected: boolean;

  constructor() {
    this.isConnected = false;
  }

  connect() {
    this.isConnected = true;
  }

  deconnect() {
    this.isConnected = false;
  }

  isconnected() {
    return this.isConnected;
  }
}
