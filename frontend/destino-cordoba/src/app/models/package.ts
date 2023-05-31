import { Destination } from "../services/destinations.service";

export interface Package {
    id: number;
    title: string;
    start_date: string;
    end_date: string;
    total_price: number;
    destination: Destination;
    rate: number;

}
