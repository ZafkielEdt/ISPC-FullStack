import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user-tab",
  templateUrl: "./user-tab.component.html",
  styleUrls: ["./user-tab.component.css"],
})
export class UserTabComponent {
  users$: Observable<User[]>;
  windowSize: boolean = false;

  constructor(private userService: UserService) {
    this.users$ = userService.getAll();
    this.windowSize = window.innerWidth > 768;
  }

  deleteUser(id: number) {
    this.userService.deleteBy(id).subscribe({
      next: () => {
        this.users$ = this.userService.getAll();
      },
      error: (error) => {
        throw error;
      },
    });
  }
}
