import { Experience } from "./experience";

export interface PackageTravel {
    id : number;
    title: string;
    description: string;
    price: number;
    gallery: string[];
    days: number;
    nights: number;
    childs?: number;
    adults?: number;
    experiences?: Experience[];
  }
