import { Province } from "./province";

export interface City {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    province: Province;
}
