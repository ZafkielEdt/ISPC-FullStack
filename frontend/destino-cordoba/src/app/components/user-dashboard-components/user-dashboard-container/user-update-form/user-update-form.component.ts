import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-update-form",
  templateUrl: "./user-update-form.component.html",
  styleUrls: ["./user-update-form.component.css"],
})
export class UserUpdateFormComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  currentUser = this.formBuilder.group({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    photo: "",
    address: this.formBuilder.group({
      street: "",
      number: "",
      zip_code: "",
    }),
  });
  user!: User;
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = Number(routeParams.get("userId"));
    this.subscription = this.userService
      .getBy(this.userId)
      .subscribe((data) => {
        this.user = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.userService.update(this.currentUser, this.userId).subscribe((data) => {
      "Updated";
    });
  }
}
