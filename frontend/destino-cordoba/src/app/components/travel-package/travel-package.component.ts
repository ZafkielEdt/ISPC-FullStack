import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
export interface PackageTravel {
  title: string;
  description: string;
  price: number;
  gallery: string[];
  days: number;
  nights: number;
  childs?: number;
  adults?: number;
}

@Component({
  selector: 'app-travel-package',
  templateUrl: './travel-package.component.html',
  styleUrls: ['./travel-package.component.css']
})
export class PackageTravelComponent implements OnInit {
  
  isChecked = true;
  packageTravel: PackageTravel = {
    title: this.route.snapshot.params['title'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',

    price: 1000,
    gallery: [
      "./assets/img/imagen1.webp", "./assets/img/imagen2.webp", "./assets/img/imagen3.webp", "./assets/img/imagen4.webp", "./assets/img/imagen5.webp", "asdasdasd", "asdasdasd", "asdasdasd"
    ],
    days: 7,
    nights: 6,
    adults:1,
    childs:1
    
  };
  totalDuration = this.packageTravel.days.toString() + ' DÍAS / ' + this.packageTravel.nights.toString() + ' NOCHES';
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder) { }
  
  selected: Date = new Date();
  
  get endDate(): Date {
    if (this.selected) {
      const endDate = new Date(this.selected);
      endDate.setDate(endDate.getDate() + this.packageTravel.days - 1);
      return endDate;
    }
    return new Date();
  }


  incrementValue(type:string) : void{
    if(type === 'childs' && this.packageTravel.childs !== undefined){
      this.packageTravel.childs >= 0 ? this.packageTravel.childs++ : this.packageTravel.childs = 0;
    }
    if(type === 'adults' && this.packageTravel.adults){
      this.packageTravel.adults >= 0 ? this.packageTravel.adults++ : this.packageTravel.adults = 1;
    }
  }
  decrementValue(type:string) : void{

    if(type === 'childs' && this.packageTravel.childs !== undefined){
      this.packageTravel.childs > 0 ? this.packageTravel.childs-- : this.packageTravel.childs = 0;
    }
    if(type === 'adults' && this.packageTravel.adults){
      this.packageTravel.adults > 1 ? this.packageTravel.adults-- : this.packageTravel.adults = 1;
    }
    
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const title = params['title'];
    });
  }



}
