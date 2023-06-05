import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Destination, DestinationsService} from "../../services/destinations.service";
import {City, CityService} from "../../services/city.service";
import {ProvinceService} from "../../services/province.service";
import {User} from "../../models/user";
import {Province} from "../../models/province";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-table-content',
    templateUrl: './table-content.component.html',
    styleUrls: ['./table-content.component.css']
})
export class TableContentComponent implements OnInit, OnDestroy {
    subscription!: Subscription;
    showUsersTable: boolean = false;
    showDestinationsTable: boolean = false;
    showCitiesTable: boolean = false;
    showProvincesTable: boolean = false;

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
        this.subscription.unsubscribe()
    }

    injectContentBy(contentName: string) {
        switch (contentName) {
            case "users":
                this.subscription = this.userService.getAll().subscribe({
                    next: (res) => {
                        this.contentUsers = res.results
                    }
                })
                break;
            case "destinations":
                this.subscription = this.destinationService.getAll().subscribe({
                    next: (res) => {
                        this.contentDestinations = res.results
                    }
                })
                break;
            case "cities":
                this.subscription = this.cityService.getAll().subscribe({
                    next: (res) => {
                        this.contentCities = res.results
                    }
                })
                break;
            case "provinces":
                this.subscription = this.provinceService.getAll().subscribe({
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
                this.injectContentBy("users");
                this.showDestinationsTable = false;
                this.showCitiesTable = false;
                this.showProvincesTable = false;
                break;
            case "destinations":
                this.showDestinationsTable = !this.showDestinationsTable;
                this.injectContentBy("destinations");
                this.showUsersTable = false;
                this.showCitiesTable = false;
                this.showProvincesTable = false;
                break;
            case "cities":
                this.showCitiesTable = !this.showCitiesTable;
                this.injectContentBy("cities");
                this.showDestinationsTable = false;
                this.showUsersTable = false;
                this.showProvincesTable = false;
                break;
            case "provinces":
                this.showProvincesTable = !this.showProvincesTable;
                this.injectContentBy("provinces");
                this.showDestinationsTable = false;
                this.showUsersTable = false;
                this.showCitiesTable = false;
                break;
        }
    }
}
