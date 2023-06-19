import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormInfo} from "../../../utils/FormInfo";
import {FormBuilder, Validators} from "@angular/forms";
import {City} from "../../../services/city.service";
import {Destination} from "../../../services/destinations.service";
import {Subscription} from "rxjs";
import {PackagesService} from "../../../services/packages.service";
import {DestinationsService} from "../../../services/destinations.service";
import {CityService} from "../../../services/city.service";

@Component({
  selector: 'app-packages-form',
  templateUrl: './packages-form.component.html',
  styleUrls: ['./packages-form.component.css']
})
export class PackagesFormComponent implements OnInit, OnDestroy{

  getSubscription!: Subscription;
  postSubscription!: Subscription;
  updateSubscription!: Subscription;

  packagesForm = this.formBuilder.group({
    name: ['',[Validators.required]],
    start_date: ['',[Validators.required]],
    end_date: ['', [Validators.required]],
    city: ['',[Validators.required]],
    destination: ['',[Validators.required]],
    rate: [1, [Validators.required]],
    total_price: [0,[Validators.required]]
  })

  cities!: City[]
  destinations!: Destination[]

  @Input() showForm: boolean = false;
  @Input() formInfo: FormInfo = {type: ''}

  get Name() {
    return this.packagesForm.get('name')
  }


  ngOnInit() {
    this.getSubscription = this.destinationService.getAll().subscribe((res) => {
      this.destinations = res.results
    })
    this.getSubscription = this.cityService.getAll().subscribe((res) => {
      this.cities = res.results
    })
  }

  ngOnDestroy() {
    this.getSubscription?.unsubscribe()
    this.postSubscription?.unsubscribe()
  }

  constructor(private formBuilder: FormBuilder, private packagesService: PackagesService,
              private destinationService: DestinationsService, private cityService: CityService) {
  }

  private operations() {
    const dataApi = {
      title: this.packagesForm.value.name,
      start_date: this.packagesForm.value.start_date,
      end_date: this.packagesForm.value.end_date,
      city: this.cities.filter(c => c.id === parseInt(<string>this.packagesForm.value.city) ? c.id : 0)[0].id,
      destination: this.destinations.filter(d => d.id === parseInt(<string>this.packagesForm.value.destination) ? d.id : 0)[0].id,
      rate: this.packagesForm.value.rate,
      total_price: this.packagesForm.value.total_price
    };

    if (this.formInfo.type.includes('create')) {
      this.postSubscription = this.packagesService.post(dataApi).subscribe({
        next: (res) => {
          this.showForm = !this.showForm;
        }
      })
    } else {
      // Update
    }
  }

  onSubmit(event: Event) {
    event.preventDefault()
    if (this.packagesForm.valid) {
      this.operations();
    } else {
      this.packagesForm.markAllAsTouched()
    }
  }
}
