import { PaymentInfo } from "src/app/pages/cart/payment-info";

export class CardApproved implements PaymentInfo {
    card_number: string;
    card_type: string;
    name: string;
    dni: string;
    cvv: string;
    exp_month: string;
    exp_year: string;
    balance: number;

    constructor() {
        this.card_number = "";
        this.card_type = "";
        this.name = "";  
        this.dni = "";   
        this.cvv = '';   
        this.exp_month = '';  
        this.exp_year = '';   
        this.balance = 5000000;
    }

}

export class CardExpired implements PaymentInfo {
    card_number: string;
    card_type: string;
    name: string;
    dni: string;
    cvv: string;
    exp_month: string;
    exp_year: string;
    balance: number;

    constructor() {
        this.card_number = "";
        this.card_type = "";
        this.name = "";  
        this.dni = "";   
        this.cvv = '';   
        this.exp_month = '';  
        this.exp_year = '';   
        this.balance = 5000000;
    }
}

export class CardRejected implements PaymentInfo {
    
    card_number: string;
    card_type: string;
    name: string;
    dni: string;
    cvv: string;
    exp_month: string;
    exp_year: string;
    balance: number;

    constructor() {
        this.card_number = "";
        this.card_type = "";
        this.name = "";  
        this.dni = "";   
        this.cvv = '';   
        this.exp_month = '';  
        this.exp_year = '';   
        this.balance = 100;
    }
}