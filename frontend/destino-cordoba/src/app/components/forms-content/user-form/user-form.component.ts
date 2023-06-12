import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {LoginService} from "../../../auth/service/login.service";
import {FormInfo} from "../../../utils/FormInfo";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

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

    @Input() formInfo: FormInfo = {id: 0, type: ''}
    @Input() showForm: boolean = false;
    @Input() showUsersTable: boolean = false;
    @Input() showDestinationsTable: boolean = false;
    @Input() showCitiesTable: boolean = false;
    @Input() showProvincesTable: boolean = false;

    ngOnInit() {
        this.getSubscription = this.loginService.getCurrentUser().subscribe((res) => {
            this.currentRol = res.rol;
        })
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
        if (this.formInfo.type.includes('create')) {
            this.postSubscription = this.userService.create(this.userForm).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
                }
            })
        } else {
            this.updateSubscription = this.userService.update(this.userForm, this.formInfo.id).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
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
