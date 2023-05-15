import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Traveler } from 'src/app/models/traveler';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.css']
})
export class TravelerComponent implements OnInit{
  
  @Input() index! : number;
  @Input() isChild! : boolean;
  public travelerForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.travelerForm = this.fb.group({
      name: [''],
      lastName: [''],
      country: [''],
      dni: [''],
      birthDate : [''],
    })
    
  }
  


}
