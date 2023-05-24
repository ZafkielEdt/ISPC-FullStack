import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from "@angular/forms";
import { RegisterService } from "../service/register.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit, OnDestroy {
  formularioRegistro!: FormGroup;
  hide: boolean = true;
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private route : Router
  ) {}
  ngOnInit(): void {
    this.formularioRegistro = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
    document.body.style.background =
      'url("./assets/img/fondo.svg") no-repeat fixed';
    document.body.style.backgroundSize = "cover";
  }
  onSubmit(): void {
    const registerData = {
      username: this.formularioRegistro.value.username,
      password: this.formularioRegistro.value.password,
      first_name: this.formularioRegistro.value.first_name,
      last_name: this.formularioRegistro.value.last_name,
      email: this.formularioRegistro.value.email,
    };
    console.log(registerData)
    if(this.formularioRegistro.valid){

      this.registerService.registerUser(registerData).subscribe({
        complete: () => {
  
          this.route.navigate(['/login'])
        },}
      );
    }else{
      
    }

  
  }


  ngOnDestroy(): void {
    document.body.style.background = "none";
  }
}
export interface RegisterRequest {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
}
