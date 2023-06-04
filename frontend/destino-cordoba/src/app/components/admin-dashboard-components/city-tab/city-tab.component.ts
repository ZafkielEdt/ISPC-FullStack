import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-tab',
  templateUrl: './city-tab.component.html',
  styleUrls: ['./city-tab.component.css']
})
export class CityTabComponent implements OnInit {
  subscriptions!: Subscription
  cities!: City[];
  createCity: boolean = false;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.subscriptions = this.cityService.getAll().subscribe(res => {this.cities = res.results})
  }

  deleteCity(id: number) {
    this.cityService.delete(id).subscribe({
      next: () => {
        this.cityService.getAll().subscribe(res => {this.cities = res.results})
      }
    })
  }

  createState() {
    this.createCity = !this.createCity
  }
}
