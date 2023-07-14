import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {LoginService} from "../../../auth/service/login.service";
import {Subscription} from "rxjs";
import {FormData} from "../../../utils/FormData";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

    getSubscription!: Subscription;
    postSubscription!: Subscription;
    updateSubscription!: Subscription;

    currentRol!: string[] | undefined;

    userForm: FormGroup = this.formBuilder.group({
        username: ['', [Validators.required, Validators.min(5)]],
        first_name: ['', [Validators.required, Validators.min(5)]],
        last_name: ['', [Validators.required, Validators.min(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.min(8)]],
        dni: [0, [Validators.required, Validators.min(8)]],
        phone: 0,
        rol: ''
    })

    @Input() formData!: FormData;
    @Input() showForm: boolean = false;
    @Input() showUsersTable: boolean = false;
    @Input() showDestinationsTable: boolean = false;
    @Input() showCitiesTable: boolean = false;
    @Input() showProvincesTable: boolean = false;
    @Input() updateCurrentUser: boolean = false;

    ngOnInit() {
        this.getSubscription = this.loginService.getCurrentUser().subscribe((res) => {
            this.currentRol = res.rol;
        })
        if (this.formData.action.includes('update') && this.updateCurrentUser) {
            this.getSubscription = this.loginService.getCurrentUser().subscribe((res) => {
                this.userForm = this.formBuilder.group({
                    username: [res?.username, [Validators.required, Validators.min(5)]],
                    first_name: [res?.first_name, [Validators.required, Validators.min(5)]],
                    last_name: [res?.last_name, [Validators.required, Validators.min(5)]],
                    email: [res?.email, [Validators.required, Validators.email]],
                    password: ['', [Validators.required, Validators.min(8)]],
                    dni: [res?.dni, [Validators.required, Validators.min(8)]],
                    phone: res?.phone,
                    rol: ''
                })
            })
        } else if ((this.formData.action.includes('update') && !this.updateCurrentUser)) {
            this.getSubscription = this.userService.getBy(this.formData.id).subscribe((res) => {
                this.userForm = this.formBuilder.group({
                    username: [res?.username, [Validators.required, Validators.min(5)]],
                    first_name: [res?.first_name, [Validators.required, Validators.min(5)]],
                    last_name: [res?.last_name, [Validators.required, Validators.min(5)]],
                    email: [res?.email, [Validators.required, Validators.email]],
                    password: ['', [Validators.required, Validators.min(8)]],
                    dni: [res?.dni, [Validators.required, Validators.min(8)]],
                    phone: res?.phone,
                    rol: ''
                })
            })
        }
    }

    ngOnDestroy() {
        this.getSubscription?.unsubscribe()
        this.postSubscription?.unsubscribe()
        this.updateSubscription?.unsubscribe()
    }

    constructor(private formBuilder: FormBuilder, private userService: UserService, private loginService: LoginService) {
    }

    get Username() {
        return this.userForm.get('username')
    }

    get FirstName() {
        return this.userForm.get('first_name')
    }

    get LastName() {
        return this.userForm.get('last_name')
    }

    get Email() {
        return this.userForm.get('email')
    }

    get Password() {
        return this.userForm.get('password')
    }

    get Dni() {
        return this.userForm.get('dni')
    }

    get Phone() {
        return this.userForm.get('phone')
    }

    get Rol() {
        return this.userForm.get('rol')
    }

    private operations() {
        if (this.formData.action.includes('create')) {
            this.postSubscription = this.userService.create(this.userForm).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
                },
                complete: () => {
                    location.reload()
                }
            })
        } else {
            this.updateSubscription = this.userService.update(this.userForm, this.formData.id).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
                },
                complete: () => {
                    location.reload()
                }
            })
        }
    }

    onSubmit(event: Event) {
        event.preventDefault()
        if (this.userForm.valid) {
            this.operations();
        } else {
            this.userForm.markAllAsTouched()
        }

    }
}
