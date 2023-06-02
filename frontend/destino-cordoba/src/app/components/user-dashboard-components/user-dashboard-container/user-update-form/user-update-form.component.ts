import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { LoginService } from "src/app/auth/service/login.service";

@Component({
  selector: "app-user-update-form",
  templateUrl: "./user-update-form.component.html",
  styleUrls: ["./user-update-form.component.css"],
})
export class UserUpdateFormComponent implements OnInit {
    currentUser!: FormGroup;
    userId!: number;
    streetControl!: FormControl;
    numberControl!: FormControl;
    zipCodeControl!: FormControl;
  
    constructor(
      private route: ActivatedRoute,
      private userService: UserService,
      private formBuilder: FormBuilder,
      private loginService: LoginService
    ) {}
  
    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      this.userId = Number(routeParams.get("userId"));
      this.loginService.getCurrentUser().subscribe((data) => {
        console.log(data);
        this.streetControl = new FormControl(data.address?.street || '');
        this.numberControl = new FormControl(data.address?.number || '');
        this.zipCodeControl = new FormControl(data.address?.zip_code || '');
  
        this.currentUser = this.formBuilder.group({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: '',
          phone: data.phone,
          photo: data.photo,
          address: this.formBuilder.group({
            street: this.streetControl || '',
            number: this.numberControl || '',
            zip_code: this.zipCodeControl || '',
          })
        });
      });
    }

  onSubmit() {
    this.userService.update(this.currentUser, this.userId).subscribe((data) => {
      "Updated";
    });
  }
}
