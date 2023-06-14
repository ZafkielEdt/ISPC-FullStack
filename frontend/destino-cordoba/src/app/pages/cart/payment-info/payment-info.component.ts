import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';
import { CardApproved, CardExpired, CardRejected } from 'src/app/services/checkout/cards/cards';
import { PaymentService } from 'src/app/services/checkout/payment.service';


export interface PaymentInfo {
  cardNumber: string;
  cardType: string,
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

  paymentInfo! : PaymentInfo;

  visa= '../../assets/icons/Visa.png'
  mastercard= '../../assets/icons/mastercard.png'
  tabActive = 0;
  client:any;
  public paymentForm!: FormGroup;
  constructor(private fb: FormBuilder,private paymentService:PaymentService,private clientService : LoginService,private router : Router) { }
  months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO','JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
  years:Number[] = new Array(10).fill(0).map((e, i) => i + 2020);

  ngOnInit(): void {
    this.clientService.getCurrentUser().subscribe((data)=>{
      this.client = data;
  });
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
    onSubmit() {
      if (this.paymentForm.valid) {
        const cardNumber = this.paymentForm.get('cardNumber')?.value;
        const cardType = this.getCardType(cardNumber);
        
        if (cardType === 'Visa' && cardNumber === '4300000000000001') {
          this.paymentInfo = this.paymentService.simulateApprovedPayment();
        } else if (cardType === 'Mastercard' && cardNumber === '5300000000000002') {
          this.paymentInfo = this.paymentService.simulateExpiredPayment();
        } else if(cardType === 'Visa' && cardNumber === '4300000000000003'){
          this.paymentInfo = this.paymentService.simulateRejectedPayment();
        }
  
        if(this.paymentInfo instanceof CardApproved){
          this.router.navigate(['/payment/accepted']);
        } else if (this.paymentInfo instanceof CardExpired){
          this.router.navigate(['/payment/expired']);
        } else if (this.paymentInfo instanceof CardRejected){
          this.router.navigate(['/payment/rejected']);
        }

        console.log(this.paymentInfo)
      }
    }
}
