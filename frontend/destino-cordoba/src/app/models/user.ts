import { Address } from "./address";

export interface User {
  pk: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  dni:number;
  phone?: string;
  rol?: string[];
  photo?: string;
  address: Address;
}
