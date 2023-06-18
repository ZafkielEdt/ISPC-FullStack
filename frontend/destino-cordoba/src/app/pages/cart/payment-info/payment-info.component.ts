import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';
import { Order } from 'src/app/models/order';
import { Package } from 'src/app/models/package';
import { PaymentStatus } from 'src/app/models/payment-status';
import { CardApproved, CardExpired, CardRejected } from 'src/app/services/checkout/cards/cards';
import { PaymentService } from 'src/app/services/checkout/payment.service';
import { OrderService } from 'src/app/services/order.service';


export interface PaymentInfo {
  card_number: string;
  card_type: string,
  name: string;
  dni: string;
  cvv: string;
  exp_month: string;
  exp_year: string;
}
@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})

export class PaymentInfoComponent implements OnInit{
  @Input() package! : number;
  @Input() amount! : number;
  paymentInfo! : PaymentInfo;
  order: Order = {
    amount: 0,
    client: {
      user: 0,
      name: '',
      last_name: '',
    },
    package: 0,
    payment: {
      card_number: '',
      card_type: '',
      name: '',
      dni: '',
      cvv: '',
      exp_month: '',
      exp_year: '',
    },
    status: PaymentStatus.NONE
  }

  visa= '../../assets/icons/Visa.png'
  mastercard= '../../assets/icons/mastercard.png'
  tabActive = 0;
  client:any;
  public paymentForm!: FormGroup;
  constructor(private fb: FormBuilder,private paymentService:PaymentService,private clientService : LoginService,private router : Router,private orderService: OrderService) { }
  months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO','JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
  years:Number[] = new Array(10).fill(0).map((e, i) => i + 2020);

  ngOnInit(): void {
    this.clientService.getCurrentUser().subscribe((data)=>{
      this.client = data;
  });
    this.paymentForm = this.fb.group({
      card_number: ['',[Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(16), Validators.maxLength(16)]],
      name: [''],
      dni: [''],
      cvv: [''],
      exp_month: [this.months[0]],
      exp_year : [this.years[0]],
    })
    this.onCardNumberChange();
    
  }
  cardType! : string;
  onCardNumberChange(): void {
    this.paymentForm.get('card_number')?.valueChanges.subscribe((value) => {
      if (value) {
        const cleanValue = value.replace(/[^0-9]/g, ''); // eliminar caracteres no numéricos
        this.paymentForm.patchValue({ card_number: cleanValue }, { emitEvent: false }); // actualizar el valor del campo
      }
      this.cardType = this.getCardType(this.paymentForm.get('card_number')?.value);
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
        const cardNumber = this.paymentForm.get('card_number')?.value;
        const cardType = this.getCardType(cardNumber);
        
        if (cardType === 'Visa' && cardNumber === '4300000000000001') {
          this.paymentInfo = this.paymentService.simulateApprovedPayment(this.paymentForm.value as PaymentInfo);
          this.saveOrder()
        } else if (cardType === 'Mastercard' && cardNumber === '5300000000000002') {
          this.paymentInfo = this.paymentService.simulateExpiredPayment(this.paymentForm.value as PaymentInfo);
          this.saveOrder()
        } else if(cardType === 'Visa' && cardNumber === '4300000000000003'){
          this.paymentInfo = this.paymentService.simulateRejectedPayment(this.paymentForm.value as PaymentInfo);
          this.saveOrder()
        }
  
      }
    }

    saveOrder(){
      this.order.amount = this.amount;
      this.order.client.user = this.client.pk;
      this.order.client.name = this.client.first_name;
      this.order.client.last_name = this.client.last_name;
      this.order.package = this.package;
      this.order.payment = this.paymentInfo;
      if(this.paymentInfo instanceof CardApproved){
        this.order.status = PaymentStatus.ACCEPTED;
      }else if(this.paymentInfo instanceof CardExpired){
        this.order.status = PaymentStatus.EXPIRED;
      }else if(this.paymentInfo instanceof CardRejected){
        this.order.status = PaymentStatus.REJECTED;
      }
      this.orderService.saveOrder(this.order).subscribe({
        next:(data)=>{
        if (data.status == PaymentStatus.ACCEPTED){
          this.router.navigate(['/payment/accepted']);
        }else if (data.status == PaymentStatus.REJECTED){
          this.router.navigate(['/payment/rejected']);
        }else if (data.status == PaymentStatus.EXPIRED){
          this.router.navigate(['/payment/expired']);
        }else{
          this.router.navigate(['/']);
        }
      },
      error:(error)=>{
        console.log(error);
      }
      
    });
    }
}
