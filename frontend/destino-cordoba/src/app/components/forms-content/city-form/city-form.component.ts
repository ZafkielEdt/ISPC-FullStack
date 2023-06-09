import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormInfo} from "../../../utils/FormInfo";
import {ProvinceService} from "../../../services/province.service";
import {CityService} from "../../../services/city.service";
import {Province} from "../../../models/province";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-city-form',
    templateUrl: './city-form.component.html',
    styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit, OnDestroy {

    getSubscription!: Subscription;
    postSubscription!: Subscription;
    updateSubscription!: Subscription;

    provinces!: Province[];

    cityForm: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.min(5)]],
        lat: [0, [Validators.required]],
        lon: [0, [Validators.required]],
        province: ''
    })

    @Input() showForm: boolean = false;
    @Input() formInfo: FormInfo = {type: ''}

    constructor(private formBuilder: FormBuilder, private provinceService: ProvinceService, private cityService: CityService) {
    }

    ngOnInit() {
        this.getSubscription = this.provinceService.getAll().subscribe((res) => {
            this.provinces = res.results;
        });
        if (this.formInfo.type.includes('update')) {
            this.getSubscription = this.cityService.getBy(this.formInfo.id).subscribe((res) => {
                this.cityForm = this.formBuilder.group({
                    name: [res[0].name, [Validators.required, Validators.min(5)]],
                    lat: [res[0].lat, [Validators.required,]],
                    lon: [res[0].lon, [Validators.required,]],
                    province: ''
                })
            })
        }
    }

    ngOnDestroy() {
        this.getSubscription?.unsubscribe()
        this.postSubscription?.unsubscribe()
        this.updateSubscription?.unsubscribe()
    }

    get Name() {
        return this.cityForm.get('name')
    }

    get Lat() {
        return this.cityForm.get('lat')
    }

    get Lon() {
        return this.cityForm.get('lon')
    }

    get Province() {
        return this.cityForm.get('province')
    }

    private operations() {
        const dataApi = {
            name: this.cityForm.value.name,
            lat: this.cityForm.value.lat,
            lon: this.cityForm.value.lon,
            province: this.provinces.filter(p => p.id === parseInt(this.cityForm.value.province) ? p.id : 0)[0].id
        };

        if (this.formInfo.type.includes('create')) {
            this.postSubscription = this.cityService.create(dataApi).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
                }
            })
        } else {
            this.updateSubscription = this.cityService.update(dataApi, this.formInfo.id).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
                }
            })
        }
    }

    onSubmit(event: Event) {
        event.preventDefault()
        if (this.cityForm.valid) {
            this.operations();
        } else {
            this.cityForm.markAllAsTouched()
        }
    }
}
