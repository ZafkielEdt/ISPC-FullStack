import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/auth/service/login.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  // TODO: Cambiar a true para acceder al dashboard del admin, en false accede al del usuario
  actualUserRole?: boolean = false;

  constructor(private authService: LoginService) {}

  ngOnInit(): void {
    // TODO: Tecnicamente, esto debería de funcionar, pero como el rol sale 'undefined' falla
    //  this.authService
    //    .getCurrentUser()
    //    .subscribe(
    //      (data) => {this.actualUserRole = data.role?.includes("ADM") ? true : false}
    //    );
  }
}
