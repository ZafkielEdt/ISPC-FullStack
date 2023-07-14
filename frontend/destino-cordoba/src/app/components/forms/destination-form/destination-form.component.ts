import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {City, CityService} from "../../../services/city.service";
import {DestinationsService} from "../../../services/destinations.service";
import {FormData} from "../../../utils/FormData";

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
    @Input() formData!: FormData;

    ngOnInit() {
        this.getSubscription = this.cityService.getAll().subscribe((res) => {
            this.cities = res.results
        })
        if (this.formData.action.includes('update')) {
            this.getSubscription = this.destinationService.getBy(this.formData.id).subscribe((res) => {
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

        if (this.formData.action.includes('create')) {
            this.postSubscription = this.destinationService.post(dataApiWithImage).subscribe({
                next: (res) => {
                    this.showForm = !this.showForm;
                },
                complete: () => {
                    location.reload()
                }
            })
        } else {
            this.updateSubscription = this.destinationService.update(dataApi, this.formData.id).subscribe({
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
        if (this.destinationForm.valid) {
            this.operations();
        } else {
            this.destinationForm.markAllAsTouched()
        }
    }
}
