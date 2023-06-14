import { PaymentInfo } from "src/app/pages/cart/payment-info";

export class CardApproved implements PaymentInfo {
    cardNumber: string;
    cardType: string;
    name: string;
    dni: string;
    cvv: string;
    expMonth: string;
    expYear: string;
    balance: number;

    constructor() {
        this.cardNumber = "4300000000000001";
        this.cardType = "Visa";
        this.name = "";  
        this.dni = "";   
        this.cvv = '333';   
        this.expMonth = '12';  
        this.expYear = '2025';   
        this.balance = 5000000;
    }
}

export class CardExpired implements PaymentInfo {
    cardNumber: string;
    cardType: string;
    name: string;
    dni: string;
    cvv: string;
    expMonth: string;
    expYear: string;
    balance: number;

    constructor() {
        this.cardNumber = "5300000000000002";
        this.cardType = "MasterCard";
        this.name = "";  
        this.dni = "";   
        this.cvv = '333';   
        this.expMonth = '12';  
        this.expYear = '2022';   
        this.balance = 100000000;
    }
}

export class CardRejected implements PaymentInfo {
    cardNumber: string;
    cardType: string;
    name: string;
    dni: string;
    cvv: string;
    expMonth: string;
    expYear: string;
    balance: number;

    constructor() {
        this.cardNumber = "4300000000000003";
        this.cardType = "Visa";
        this.name = "";  
        this.dni = "";   
        this.cvv = '333';   
        this.expMonth = '12';  
        this.expYear = '2025';   
        this.balance = 100;
    }
}