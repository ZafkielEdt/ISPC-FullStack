import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-update-form",
  templateUrl: "./user-update-form.component.html",
  styleUrls: ["./user-update-form.component.css"],
})
export class UserUpdateFormComponent implements OnInit {
  currentUser!: FormGroup;
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = Number(routeParams.get("userId"));
    this.userService
      .getBy(this.userId)
      .subscribe((data) => {
        this.currentUser = this.formBuilder.group({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: "",
          phone: data.phone,
          photo: data.photo,
          address: this.formBuilder.group({
            street: data.address.street || "",
            number: data.address.number || "",
            zip_code: data.address.zip_code || "",
          }),
        });
      });
  }

  onSubmit() {
    this.userService.update(this.currentUser, this.userId).subscribe((data) => {
      "Updated";
    });
  }
}
