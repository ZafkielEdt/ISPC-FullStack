import { City } from "./city";

export interface Destination {
    id: number;
    name: string;
    description: string;
    info: string;
    city: City;
    gallery: string[];
}
