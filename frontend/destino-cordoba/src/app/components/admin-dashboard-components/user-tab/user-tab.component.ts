import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user-tab",
  templateUrl: "./user-tab.component.html",
  styleUrls: ["./user-tab.component.css"],
})
export class UserTabComponent implements OnInit, OnDestroy {
  users!: User[];
  suscribe: Subscription | undefined;
  windowSize: boolean = false;

  constructor(private userService: UserService) {
    this.windowSize = window.innerWidth > 768;
  }

  deleteUser(id: number) {
    this.userService.deleteBy(id).subscribe({
      next: () => {
        this.userService.getAll().subscribe((res) => {
          this.users = res.results;
        });
      },
      error: (error) => {
        throw error;
      },
    });
  }

  ngOnInit(): void {
    this.suscribe = this.userService.getAll().subscribe((res) => {
      this.users = res.results;
    });
  }

  ngOnDestroy(): void {
    this.suscribe?.unsubscribe();
  }
}
