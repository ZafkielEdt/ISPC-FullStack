import { Injectable } from '@angular/core';
import { PaymentInfo } from 'src/app/pages/cart/payment-info';
import { CardApproved, CardExpired, CardRejected } from './cards/cards';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  saveOrder(order: Order) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  simulateApprovedPayment(paymentInfo : PaymentInfo): PaymentInfo {
    let card = new CardApproved();
    card.card_number = paymentInfo.card_number;
    card.card_type = 'Visa';
    card.name = paymentInfo.name;
    card.dni = paymentInfo.dni;
    card.cvv = paymentInfo.cvv;
    card.exp_month = paymentInfo.exp_month;
    card.exp_year = paymentInfo.exp_year;
    card.balance = 5000000;
    return card; 
  }

  simulateExpiredPayment(paymentInfo : PaymentInfo): PaymentInfo {
    let card = new CardExpired();
    card.card_number = paymentInfo.card_number;
    card.card_type = 'Mastercard';
    card.name = paymentInfo.name;
    card.dni = paymentInfo.dni;
    card.cvv = paymentInfo.cvv;
    card.exp_month = paymentInfo.exp_month;
    card.exp_year = paymentInfo.exp_year;
    card.balance = 5000000;
    return card; 
  }

  simulateRejectedPayment(paymentInfo : PaymentInfo): PaymentInfo {
    let card = new CardRejected();
    card.card_number = paymentInfo.card_number;
    card.card_type = 'Visa';
    card.name = paymentInfo.name;
    card.dni = paymentInfo.dni;
    card.cvv = paymentInfo.cvv;
    card.exp_month = paymentInfo.exp_month;
    card.exp_year = paymentInfo.exp_year;
    card.balance = 100;
    return card; 
  }
}


