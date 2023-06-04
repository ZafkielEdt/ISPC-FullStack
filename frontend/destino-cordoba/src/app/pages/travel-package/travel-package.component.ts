import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { CartService } from "src/app/services/products/cart.service";
import { ExperiencesService } from "src/app/services/experiencias.service";
import { PackagesService } from "src/app/services/packages.service";
import { Package } from "src/app/models/package";
import { DestinationsService } from "src/app/services/destinations.service";
import { PackageTravel } from "src/app/models/package-travel";
import { ImagesService } from "src/app/services/images.service";

@Component({
	selector: "app-travel-package",
	templateUrl: "./travel-package.component.html",
	styleUrls: ["./travel-package.component.css"],
})
export class PackageTravelComponent implements OnInit {
	id!: number;
	isChecked = true;
	packageTravel!:any;
	package! : Package;
	destinationFetch!: any;
	gallery: string[] = [];
	totalDuration: string = "";
	firstFormGroup = this._formBuilder.group({
		firstCtrl: ["", Validators.required],
	});
	secondFormGroup = this._formBuilder.group({
		secondCtrl: ["", Validators.required],
	});
	isLoading: boolean = true;

	constructor(
		private route: ActivatedRoute,
		private _formBuilder: FormBuilder,
		private cartService: CartService,
		private router: Router,
		private expericenceService: ExperiencesService,
		private packageService: PackagesService,
		private destinationService : DestinationsService,
		private imagesService: ImagesService		

	) {}

	selectedDate: Date = new Date();
	dateValid: boolean = false;
	endDate: Date = new Date();
	errorMessage: string = "";
	set selected(value: Date) {
		this.selectedDate = value;
		this.dateValid = false;
		this.errorMessage = "";
	}

	get selected(): Date {
		return this.selectedDate;
	}

	checkAvailability(): void {
		if (this.selected && this.selected >= new Date()) {
			this.dateValid = true;
			this.errorMessage = "";
		} else {
			this.dateValid = false;
			this.errorMessage =
				"La fecha seleccionada debe ser posterior a hoy.";
		}
	}

	incrementValue(type: string): void {
		if (
			type === "childs" &&
			this.packageTravel.childs !== undefined &&
			this.packageTravel.childs.length <= 4
		) {
			this.packageTravel.childs.length >= 0
				? this.packageTravel.childs.length++
				: (this.packageTravel.childs.length = 0);
		}
		if (
			type === "adults" &&
			this.packageTravel.adults &&
			this.packageTravel.adults.length <= 4
		) {
			this.packageTravel.adults.length >= 0
				? this.packageTravel.adults.length++
				: (this.packageTravel.adults.length = 1);
		}
	}
	decrementValue(type: string): void {
		if (type === "childs" && this.packageTravel.childs !== undefined) {
			this.packageTravel.childs.length > 0
				? this.packageTravel.childs.length--
				: (this.packageTravel.childs.length = 0);
		}
		if (type === "adults" && this.packageTravel.adults) {
			this.packageTravel.adults.length > 1
				? this.packageTravel.adults.length--
				: (this.packageTravel.adults.length = 1);
		}
		console.log(this.packageTravel.adults.length);
	}

	addToCart() {
		this.cartService.addItem(this.packageTravel);
		this.router.navigateByUrl("/cart");
	}

	destinationId:number = 0;
	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.id = params["id"];
		});
		this.packageService.getPackageById(this.id).subscribe({
			next: (paquete: any) => {
				this.packageTravel = {
					id: paquete.id,
					title: paquete.title,
					description: paquete.destination.description,
					price: paquete.total_price,
					days: Number(paquete.end_date.split('-')[2]) - Number(paquete.start_date.split('-')[2]),
					nights: Number(paquete.end_date.split('-')[2]) - Number(paquete.start_date.split('-')[2])-1,
					rate: 0,
					childs: [],
					adults: [],
					experiences: [],
					destination: paquete.destination,
				  };
				  this.totalDuration = this.packageTravel.days + " días y " + this.packageTravel.nights + " noches";
				  this.destinationId = paquete.destination.id;
				  this.imagesService.getDestinationImages(this.destinationId).subscribe({
					next: (images: any) => {	
						console.log(images)
						this.gallery = images.results;
					}});
			},
			error: (error: any) => {
			  console.log(error)
			},
			complete: () => {
				this.isLoading = false;
			},
		  });

		}
	setPackageInfo(): void {
		if (this.package && this.destinationFetch) {
			console.log("hola")
		  this.packageTravel = {
			id: this.id,
			title: this.package.title,
			description: this.package.destination.description,
			price: this.package.total_price,
			days: Number(this.package.end_date.split('-')[2]) - Number(this.package.start_date.split('-')[2]),
			nights: Number(this.package.end_date.split('-')[2]) - Number(this.package.start_date.split('-')[2])-1, // Asegúrate de ajustar esta línea según corresponda
			rate: 0,
			childs: [],
			adults: [],
			experiences: [],
			destination: this.destinationFetch,
		  };
		}
	  }
}
