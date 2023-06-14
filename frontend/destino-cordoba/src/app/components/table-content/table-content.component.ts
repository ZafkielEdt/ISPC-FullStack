import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Destination, DestinationsService} from "../../services/destinations.service";
import {City, CityService} from "../../services/city.service";
import {ProvinceService} from "../../services/province.service";
import {User} from "../../models/user";
import {Province} from "../../models/province";
import {Subscription} from "rxjs";
import {FormInfo} from "../../utils/FormInfo";


@Component({
    selector: 'app-table-content',
    templateUrl: './table-content.component.html',
    styleUrls: ['./table-content.component.css']
})
export class TableContentComponent implements OnInit, OnDestroy {
    getSubscription!: Subscription;
    deleteSubscription!: Subscription;
    // Table
    showUsersTable: boolean = false;
    showDestinationsTable: boolean = false;
    showCitiesTable: boolean = false;
    showProvincesTable: boolean = false;
    // Form
    showUserForm: boolean = false;
    showCityForm: boolean = false;
    showProvinceForm: boolean = false;
    formInfo: FormInfo = {type: ''}

    contentUsers!: User[];
    contentDestinations!: Destination[];
    contentCities!: City[];
    contentProvinces!: Province[];

    @Input() showContentTab: boolean = false;
    @Input() showProfileTab: boolean = false;

    constructor(private userService: UserService, private destinationService: DestinationsService,
                private cityService: CityService, private provinceService: ProvinceService) {
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.getSubscription.unsubscribe()
        this.deleteSubscription.unsubscribe()
    }

    injectContentBy(contentName: string) {
        switch (contentName) {
            case "users":
                this.getSubscription = this.userService.getAll().subscribe({
                    next: (res) => {
                        this.contentUsers = res.results
                    }
                })
                break;
            case "destinations":
                this.getSubscription = this.destinationService.getAll().subscribe({
                    next: (res) => {
                        this.contentDestinations = res.results
                    }
                })
                break;
            case "cities":
                this.getSubscription = this.cityService.getAll().subscribe({
                    next: (res) => {
                        this.contentCities = res.results
                    }
                })
                break;
            case "provinces":
                this.getSubscription = this.provinceService.getAll().subscribe({
                    next: (res) => {
                        this.contentProvinces = res.results
                    }
                })
                break;
        }
    }

    showTableBy(tableName: string) {
        switch (tableName) {
            case "users":
                this.showUsersTable = !this.showUsersTable;
                if (this.showUsersTable) {
                    this.injectContentBy("users");
                }
                this.showDestinationsTable = false;
                this.showCitiesTable = false;
                this.showProvincesTable = false;
                break;
            case "destinations":
                this.showDestinationsTable = !this.showDestinationsTable;
                if (this.showDestinationsTable) {
                    this.injectContentBy("destinations");
                }
                this.showUsersTable = false;
                this.showCitiesTable = false;
                this.showProvincesTable = false;
                break;
            case "cities":
                this.showCitiesTable = !this.showCitiesTable;
                if (this.showCitiesTable) {
                    this.injectContentBy("cities");
                }
                this.showDestinationsTable = false;
                this.showUsersTable = false;
                this.showProvincesTable = false;
                break;
            case "provinces":
                this.showProvincesTable = !this.showProvincesTable;
                if (this.showProvincesTable) {
                    this.injectContentBy("provinces");
                }
                this.showDestinationsTable = false;
                this.showUsersTable = false;
                this.showCitiesTable = false;
                break;
        }
    }

    deleteBy(content: string, id: number) {
        switch (content) {
            case "user":
                this.deleteSubscription = this.userService.deleteBy(id).subscribe({
                    next: (res) => {
                        this.userService.getAll().subscribe((res) => {
                            this.contentUsers = res.results
                        })
                    }
                })
                break;
            case "destination":
                this.destinationService.deleteBy(id).subscribe({
                    next: () => {
                        this.destinationService.getAll().subscribe((res) => {
                            this.contentDestinations = res.results
                        })
                    }
                })
                break;
            case "city":
                this.cityService.delete(id).subscribe({
                    next: (res) => {
                        this.cityService.getAll().subscribe((res) => this.contentCities = res.results)
                    }
                })
                break;
            case "province":
                this.provinceService.deleteBy(id).subscribe({
                    next: (res) => {
                        this.provinceService.getAll().subscribe((res) => this.contentProvinces = res.results)
                    }
                })
        }
    }

    private setOperation(operation: 'create' | 'update', id?: number) {
        if (operation.includes('update')) {
            this.formInfo = {id: id, type: operation}
        } else {
            this.formInfo = {type: operation}
        }
    }

    showFormBy(content: string, operation: 'create' | 'update', id?: number) {
        switch (content) {
            case "user":
                this.showUsersTable = !this.showUsersTable;
                this.showUserForm = true;
                this.setOperation(operation, id)
                break;
            case 'city':
                this.showCitiesTable = !this.showCitiesTable;
                this.showCityForm = true;
                this.setOperation(operation, id)
                break;
            case 'province':
                this.showProvincesTable = !this.showProvincesTable
                this.showProvinceForm = true;
                this.setOperation(operation, id)
                break;
        }
    }
}
