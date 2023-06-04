import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/auth/service/login.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  actualUserRole?: boolean = false;

  constructor(private authService: LoginService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((data) => {
      this.actualUserRole = data.rol?.includes("ADM") ? true : false;
    });
  }
}
