import { PaymentInfo } from "../pages/cart/payment-info";
import { PaymentStatus } from "./payment-status";

export interface Order {
    amount: number;
    client: {
      user: number;
      name: string;
      last_name: string;
    };
    package: number;
    payment: PaymentInfo;
    status: PaymentStatus;
  }