import {Component, Input} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ProvinceService} from "../../../services/province.service";
import {FormInfo} from "../../../utils/FormInfo";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-province-form',
    templateUrl: './province-form.component.html',
    styleUrls: ['./province-form.component.css']
})
export class ProvinceFormComponent {

    postSubscription!: Subscription;
    updateSubscription!: Subscription;

    provinceForm: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.min(5)]],
        lat: [0, [Validators.required,]],
        lon: [0, [Validators.required,]],
    })

    @Input() showForm: boolean = false;
    @Input() formInfo: FormInfo = {type: ''}

    constructor(private formBuilder: FormBuilder, private provinceService: ProvinceService) {
    }

    get Name() {
        return this.provinceForm.get('name')
    }

    get Lat() {
        return this.provinceForm.get('lat')
    }

    get Lon() {
        return this.provinceForm.get('lon')
    }

    private operations() {
        if (this.formInfo.type.includes('create')) {
            this.postSubscription = this.provinceService.create(this.provinceForm).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
                }
            })
        }
    }

    onSubmit(event: Event) {
        event.preventDefault()
        if (this.provinceForm.valid) {
            this.operations();
        } else {
            this.provinceForm.markAllAsTouched()
        }
    }
}
