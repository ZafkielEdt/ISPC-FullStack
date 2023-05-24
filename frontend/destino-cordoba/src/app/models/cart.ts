import { PackageTravel } from "./package-travel";

export interface Cart {
    id: number;
    totalValue: number;
    item: PackageTravel | null;
}
