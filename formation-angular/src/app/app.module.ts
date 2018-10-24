import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TitreComponent } from './titre/titre.component';
import { MenuComponent } from './menu/menu.component';

import {FormsModule} from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {ConnectionService} from './services/connection.service';
import {CurrentUserService} from './services/current-user.service';
import {UsersService} from './services/users.service';
import {TodoService} from './services/todo.service';

library.add(faCoffee, fas, far);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TitreComponent,
    MenuComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    ConnectionService,
    CurrentUserService,
    UsersService,
    TodoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
