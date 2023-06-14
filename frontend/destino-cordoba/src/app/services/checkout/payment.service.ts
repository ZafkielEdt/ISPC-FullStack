import { Injectable } from '@angular/core';
import { PaymentInfo } from 'src/app/pages/cart/payment-info';
import { CardApproved, CardExpired, CardRejected } from './cards/cards';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  simulateApprovedPayment(): PaymentInfo {
    return new CardApproved();
  }

  simulateExpiredPayment(): PaymentInfo {
    return new CardExpired();
  }

  simulateRejectedPayment(): PaymentInfo {
    return new CardRejected();
  }
}


