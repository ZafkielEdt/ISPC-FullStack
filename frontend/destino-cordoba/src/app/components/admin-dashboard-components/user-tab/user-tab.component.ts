import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent {
  users$: Observable<User[]>;
  windowSize: boolean = false;
  update: boolean = false;

  constructor(private userService: UserService) {
    this.users$ = userService.getAll();
    this.windowSize = window.innerWidth > 768;
  }

  clickUpdate(){
    this.update = !this.update;
  }

  deleteUser(id: number) {
    this.userService.deleteBy(id).subscribe();
    window.location.reload();
  }
}
