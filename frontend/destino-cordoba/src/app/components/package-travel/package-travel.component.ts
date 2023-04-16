import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PackageTravel {
  title: string;
  description: string;
  price: number;
  image: string[];
  days: number;
  nights: number;
}

@Component({
  selector: 'app-package-travel',
  templateUrl: './package-travel.component.html',
  styleUrls: ['./package-travel.component.css']
})
export class PackageTravelComponent implements OnInit{


  packageTravel: PackageTravel | undefined;
  constructor(private route: ActivatedRoute) { }
  
  
  
  
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const title = params['title'];
      this.packageTravel = {
      title: 'cordoba',
      description: 'Lorem ',
      price: 1000,
      image: [''],
      days:7,
      nights:6
    };
    });
    
  
  }
}
