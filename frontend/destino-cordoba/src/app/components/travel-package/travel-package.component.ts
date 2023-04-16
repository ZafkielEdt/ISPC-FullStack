import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PackageTravel {
  title: string;
  description: string;
  price: number;
  gallery: string[];
  days: number;
  nights: number;
}

@Component({
  selector: 'app-travel-package',
  templateUrl: './travel-package.component.html',
  styleUrls: ['./travel-package.component.css']
})
export class PackageTravelComponent implements OnInit{

  packageTravel: PackageTravel =  {
    title: this.route.snapshot.params['title'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',

    price: 1000,
    gallery: [
      "./assets/img/imagen1.webp","./assets/img/imagen2.webp","./assets/img/imagen3.webp","./assets/img/imagen4.webp","./assets/img/imagen5.webp","asdasdasd","asdasdasd","asdasdasd"
    ],
    days:7,
    nights:6

  };
  galleryLength : boolean = this.packageTravel.gallery.length > 4;
  totalDuration = this.packageTravel.days.toString()  + ' DÍAS / ' + this.packageTravel.nights.toString()+' NOCHES';
  constructor(private route: ActivatedRoute) { }
  
  
  
  
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const title = params['title'];
    });
  }

}
