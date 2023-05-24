import { Destination } from "./destination";

export interface PackageCard {
    id : number;
    title: string;
    description: string;
    rate: number;
    totalPrice: number;
    days: number;
    nights: number;
    destination: Destination;
}
