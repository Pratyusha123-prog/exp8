import { Component } from '@angular/core';
import { UserService } from './data.server';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exp8';
  constructor(private userService: UserService) {
    this.userService.getUsers()
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
