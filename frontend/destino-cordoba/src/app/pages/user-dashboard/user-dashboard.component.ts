import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/service/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  actualUserRole: string[] = ['user'];

  constructor(private authService: LoginService) {
    //this.authService.getCurrentUser().subscribe(data => this.actualUserRole = data.role)
  }

}
