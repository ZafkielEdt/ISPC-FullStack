import { PackageTravel } from "./package-travel";

export interface Cart {
    id: number;
    totalValue: number;
    totalItems: number;
    item: PackageTravel | null;
}
