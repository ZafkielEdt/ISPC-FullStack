import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginService } from "src/app/auth/service/login.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user-dashboard-container",
  templateUrl: "./user-dashboard-container.component.html",
  styleUrls: ["./user-dashboard-container.component.css"],
})
export class UserDashboardContainerComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  currentUser!: User;

  constructor(private authService: LoginService) {}

  ngOnInit(): void {
    this.subscription = this.authService
      .getCurrentUser()
      .subscribe((data) => (this.currentUser = data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
