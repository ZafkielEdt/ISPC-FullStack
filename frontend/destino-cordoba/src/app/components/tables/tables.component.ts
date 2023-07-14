import {Component, OnDestroy} from '@angular/core';
import {Tables} from "../../utils/tables";
import {UserService} from "../../services/user.service";
import {Destination, DestinationsService} from "../../services/destinations.service";
import {City, CityService} from "../../services/city.service";
import {ProvinceService} from "../../services/province.service";
import {PackagesService} from "../../services/packages.service";
import {OrderService} from "../../services/order.service";
import {User} from "../../models/user";
import {Province} from "../../models/province";
import {Order} from "../../models/order";
import {Package} from "../../models/package";
import {Subscription} from "rxjs";
import {FormsService} from "../../services/forms.service";
import {Forms} from "../../utils/forms";

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnDestroy {

    subscription!: Subscription;
    currentTable!: Tables;
    tableData: User[] | Destination[] | City[] | Province[] | Package[] | Order[] = [];
    protected readonly Tables = Tables;

    constructor(private userService: UserService, private destinationService: DestinationsService, private cityService: CityService,
                private provinceService: ProvinceService, private packagesService: PackagesService, private orderService: OrderService,
                private formsService: FormsService) {
    }

    changeCurrentTable(tableName: Tables): void {
        this.hiddenForm()
        switch (tableName) {
            case Tables.Users:
                this.currentTable = Tables.Users
                this.getData()
                break
            case Tables.Destinations:
                this.currentTable = Tables.Destinations
                this.getData()
                break
            case Tables.Cities:
                this.currentTable = Tables.Cities
                this.getData()
                break
            case Tables.Provinces:
                this.currentTable = Tables.Provinces
                this.getData()
                break
            case Tables.Packages:
                this.currentTable = Tables.Packages
                this.getData()
                break
            case Tables.Orders:
                this.currentTable = Tables.Orders
                this.getData()
                break
        }
    }

    hiddenTable(action: Tables) {
        this.currentTable = action
    }

    hiddenForm() {
        this.formsService.changeForm('update',Forms.AnyForm, false, 0)
    }

    getData(): void {
        this.tableData = []
        switch (this.currentTable) {
            case Tables.Users:
                this.subscription = this.userService.getAll().subscribe((res) => {
                    this.tableData = res.results
                })
                break
            case Tables.Destinations:
                this.subscription = this.destinationService.getAll().subscribe((res) => {
                    this.tableData = res.results
                })
                break
            case Tables.Cities:
                this.subscription = this.cityService.getAll().subscribe((res) => {
                    this.tableData = res.results
                })
                break
            case Tables.Provinces:
                this.subscription = this.provinceService.getAll().subscribe((res) => {
                    this.tableData = res.results
                })
                break
            case Tables.Packages:
                this.subscription = this.packagesService.getAll().subscribe((res) => {
                    this.tableData = res.results
                })
                break
            case Tables.Orders:
                this.subscription = this.orderService.getOrders().subscribe((res) => {
                    this.tableData = res
                })
                break
            default:
                console.error('Nothing loaded')
                break
        }
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
