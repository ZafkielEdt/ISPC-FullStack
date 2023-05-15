import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface PaymentInfo {
  cardNumber: string;
  cardType: '',
  name: string;
  dni: string;
  cvv: string;
  expMonth: string;
  expYear: string;
}
@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})

export class PaymentInfoComponent implements OnInit{

  paymentInfo : PaymentInfo = {
    cardNumber: '',
    cardType: '',
    name: '',
    dni: '',
    cvv: '',
    expMonth: '',
    expYear: '',
  }

  visa= '../../assets/icons/Visa.png'
  mastercard= '../../assets/icons/mastercard.png'
  tabActive = 0;

  public paymentForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO','JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
  years:Number[] = new Array(10).fill(0).map((e, i) => i + 2023);

  ngOnInit(): void {
    console.log(this.years)
    this.paymentForm = this.fb.group({
      cardNumber: ['',[Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(16), Validators.maxLength(16)]],
      name: [''],
      dni: [''],
      cvv: [''],
      expMonth: [this.months[0]],
      expYear : [this.years[0]],
    })
    this.onCardNumberChange();
    
  }
  cardType! : string;
  onCardNumberChange(): void {
    this.paymentForm.get('cardNumber')?.valueChanges.subscribe((value) => {
      if (value) {
        const cleanValue = value.replace(/[^0-9]/g, ''); // eliminar caracteres no numéricos
        this.paymentForm.patchValue({ cardNumber: cleanValue }, { emitEvent: false }); // actualizar el valor del campo
      }
      this.cardType = this.getCardType(this.paymentForm.get('cardNumber')?.value);
    });
  }
    
    setActive(index: number) {
      this.tabActive = index;
      console.log(this.tabActive)
      
    }

    getCardType(cardNumber: string): string {

    
      if (cardNumber.startsWith('4')) {
        return 'Visa';
      } else if (cardNumber.startsWith('5')) {
        return 'Mastercard';
      } else {
        return 'Unknown';
      }
    }
    onSubmit(){
      this.paymentForm.value.cardType = this.cardType;
      console.log(this.paymentForm.value as PaymentInfo)
    }
}
