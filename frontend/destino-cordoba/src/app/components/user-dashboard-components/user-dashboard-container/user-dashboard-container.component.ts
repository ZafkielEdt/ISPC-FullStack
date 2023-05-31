import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/service/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-dashboard-container',
  templateUrl: './user-dashboard-container.component.html',
  styleUrls: ['./user-dashboard-container.component.css']
})
export class UserDashboardContainerComponent {

  currentUser!: User;

  constructor(private authService: LoginService){
    // this.currentUser = {
    //   id: 1,
    //   first_name: 'John',
    //   last_name: 'Doe',
    //   username: 'John',
    //   email: 'john@gmail.com',
    //   password: 'password',
    //   role: ['user']
    // }
    this.authService.getCurrentUser().subscribe(data => this.currentUser = data);
  }
}
