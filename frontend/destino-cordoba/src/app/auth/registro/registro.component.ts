import { Component, OnDestroy, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	MinLengthValidator,
	Validators,
} from "@angular/forms";
import { RegisterService } from "../service/register.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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
		private route: Router,
		private toastr: ToastrService
	) {}
	ngOnInit(): void {
		this.formularioRegistro = this.fb.group({
			username: [
				"",
				[
					Validators.required,
					Validators.minLength(4),
					Validators.maxLength(20),
				],
			],
			first_name: ["", [Validators.required]],
			last_name: ["", [Validators.required]],
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(8)]],
		});
		document.body.style.background =
			'url("./assets/img/fondo.svg") no-repeat fixed';
		document.body.style.backgroundSize = "cover";
	}

	onSubmit(): void {
		if (this.formularioRegistro.valid) {
			const registerData = {
				username: this.formularioRegistro.value.username,
				password: this.formularioRegistro.value.password,
				first_name: this.formularioRegistro.value.first_name,
				last_name: this.formularioRegistro.value.last_name,
				email: this.formularioRegistro.value.email,
			};
			this.toastr.success(
				"Redireccionando a la pagina de login",
				"Registrado",
				{
					positionClass: "toast-top-center",
					timeOut: 3000,
				}
			);
			this.registerService.registerUser(registerData).subscribe({
				complete: () => {
					this.route.navigate(["/login"]);
				},
			});
		} else if (this.formularioRegistro.hasError("email")) {
			this.toastr.error(
				"Por favor completalos",
				"Estos campos son requeridos",
				{
					positionClass: "toast-top-center",
					timeOut: 3000,
				}
			);
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
