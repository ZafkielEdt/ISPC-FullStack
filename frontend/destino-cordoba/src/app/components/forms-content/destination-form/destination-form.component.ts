import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormInfo} from "../../../utils/FormInfo";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {City, CityService} from "../../../services/city.service";
import {DestinationsService} from "../../../services/destinations.service";

@Component({
    selector: 'app-destination-form',
    templateUrl: './destination-form.component.html',
    styleUrls: ['./destination-form.component.css']
})
export class DestinationFormComponent implements OnInit, OnDestroy {

    getSubscription!: Subscription;
    postSubscription!: Subscription;
    updateSubscription!: Subscription;

    cities!: City[];

    destinationForm: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required, Validators.min(5)]],
        description: '',
        city: '',
        title: '',
        image: ''
    })

    @Input() showForm: boolean = false;
    @Input() formInfo: FormInfo = {type: ''}

    ngOnInit() {
        this.getSubscription = this.cityService.getAll().subscribe((res) => {
            this.cities = res.results
        })
        if (this.formInfo.type.includes('update')) {
            this.getSubscription = this.destinationService.getBy(this.formInfo.id).subscribe((res) => {
                this.destinationForm = this.formBuilder.group({
                    name: res.name,
                    description: res.description,
                    city: ''
                })
            })
        }
    }

    ngOnDestroy() {
        this.getSubscription?.unsubscribe()
        this.postSubscription?.unsubscribe()
        this.updateSubscription?.unsubscribe()
    }

    constructor(private formBuilder: FormBuilder, private destinationService: DestinationsService, private cityService: CityService) {
    }

    get Name() {
        return this.destinationForm.get('name')
    }

    get City() {
        return this.destinationForm.get('city')
    }

    private operations() {
        const dataApiWithImage = {
            name: this.destinationForm.value.name,
            description: this.destinationForm.value.description,
            city: this.cities.filter(c => c.id === parseInt(this.destinationForm.value.city) ? c.id : 0)[0].id,
            images: {title: this.destinationForm.value.title, image: this.destinationForm.value.image}
        };
        const dataApi = {
            name: this.destinationForm.value.name,
            description: this.destinationForm.value.description,
            city: this.cities.filter(c => c.id === parseInt(this.destinationForm.value.city) ? c.id : 0)[0].id
        };

        if (this.formInfo.type.includes('create')) {
            this.postSubscription = this.destinationService.post(dataApiWithImage).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
                }
            })
        } else {
            this.updateSubscription = this.destinationService.update(dataApi, this.formInfo.id).subscribe({
                next: (res) => {

                    this.showForm = !this.showForm;
                }
            })
        }
    }

    onSubmit(event: Event) {
        event.preventDefault()
        if (this.destinationForm.valid) {
            this.operations();
        } else {
            this.destinationForm.markAllAsTouched()
        }
    }
}
