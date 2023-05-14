import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { packageTravel } from 'src/app/models/package-travel';
import { CartService } from 'src/app/services/products/cart.service';





@Component({
  selector: 'app-travel-package',
  templateUrl: './travel-package.component.html',
  styleUrls: ['./travel-package.component.css']
})
export class PackageTravelComponent implements OnInit {

  
  isChecked = true;
  packageTravel = packageTravel;
  totalDuration = this.packageTravel.days.toString() + ' DÍAS / ' + this.packageTravel.nights.toString() + ' NOCHES';
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder, private cartService : CartService,private router : Router) { }
  
  selectedDate: Date = new Date();
  dateValid : boolean = false;
  endDate : Date = new Date();
  errorMessage : string = '';
  set selected(value: Date) {
    this.selectedDate = value;
    this.dateValid = false;
    this.errorMessage = '';
  }
  
  get selected(): Date {
    return this.selectedDate;
  }
  
  checkAvailability(): void {
    if (this.selected && this.selected >= new Date()) {
      this.dateValid = true;
      this.errorMessage = '';
    } else {
      this.dateValid = false;
      this.errorMessage = 'La fecha seleccionada debe ser posterior a hoy.';
    }
  }

  incrementValue(type:string) : void{
    if(type === 'childs'  &&  this.packageTravel.childs !== undefined && this.packageTravel.childs.length <= 4 ){
      this.packageTravel.childs.length >= 0 ? this.packageTravel.childs.length++ : this.packageTravel.childs.length = 0;
    }
    if(type === 'adults' && this.packageTravel.adults && this.packageTravel.adults.length <= 4){
      this.packageTravel.adults.length >= 0 ? this.packageTravel.adults.length++ : this.packageTravel.adults.length = 1;
    }
  }
  decrementValue(type:string) : void{

    if(type === 'childs' && this.packageTravel.childs !== undefined){
      this.packageTravel.childs.length > 0 ? this.packageTravel.childs.length-- : this.packageTravel.childs.length = 0;
    }
    if(type === 'adults' && this.packageTravel.adults ){
      this.packageTravel.adults.length > 1 ? this.packageTravel.adults.length-- : this.packageTravel.adults.length = 1;
    }

    
  }

  addToCart() {
    this.cartService.addItem(this.packageTravel);
    console.log(this.cartService.getCurrentCart());
    this.router.navigateByUrl('/cart');
    }
  




  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const title = params['title'];
    });
  }



}
