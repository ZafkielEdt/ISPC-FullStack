import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ProvinceService} from "../../../services/province.service";
import {FormInfo} from "../../../utils/FormInfo";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-province-form',
    templateUrl: './province-form.component.html',
    styleUrls: ['./province-form.component.css']
})
export class ProvinceFormComponent implements OnInit, OnDestroy {

    getSubscription!: Subscription;
    postSubscription!: Subscription;
    updateSubscription!: Subscription;

    provinceForm: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.min(5)]],
        lat: [0, [Validators.required,]],
        lon: [0, [Validators.required,]],
    })

    @Input() showForm: boolean = false;
    @Input() formInfo: FormInfo = {type: ''}

    ngOnInit() {
        if (this.formInfo.type.includes('update')) {
            this.getSubscription = this.provinceService.getBy(this.formInfo.id).subscribe((res) => {
                this.provinceForm = this.formBuilder.group({
                    name: [res.name, [Validators.required, Validators.min(5)]],
                    lat: [res.lat, [Validators.required,]],
                    lon: [res.lon, [Validators.required,]],
                })
            })
        }
    }

    ngOnDestroy() {
        this.getSubscription?.unsubscribe()
        this.postSubscription?.unsubscribe()
        this.updateSubscription?.unsubscribe()
    }

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
        } else {
            this.updateSubscription = this.provinceService.update(this.provinceForm, this.formInfo.id).subscribe({
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
