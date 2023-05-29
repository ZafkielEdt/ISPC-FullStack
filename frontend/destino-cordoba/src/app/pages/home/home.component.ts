import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { LoginService } from "src/app/auth/service/login.service";
import { PackageCard } from "src/app/models/package-card";
import {
	Destination,
	DestinationsService,
} from "src/app/services/destinations.service";
import { PackagesService } from "src/app/services/packages.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
	subscription: Subscription | undefined;
	packages!: PackageCard[];
	packageUrl = "travel/";
	destinations$!: Destination[];

	constructor(
		private packageService: PackagesService,
		private destinationsService: DestinationsService,
		private loginService: LoginService
	) {}

	ngOnInit(): void {
		this.subscription = this.packageService
			.getPackages()
			.subscribe((data: PackageCard[]) => {
				this.packages = data;
			});
		this.destinationsService.getDestinations().subscribe((data) => {
			this.destinations$ = data.results;
			console.log(this.destinations$);
		});
	}

	ngOnDestroy() {
		this.subscription?.unsubscribe();
	}
}
