import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { BuscadorService } from "src/app/services/buscador.service";

@Component({
	selector: "app-buscador",
	templateUrl: "./buscador.component.html",
	styleUrls: ["./buscador.component.css"],
})
export class BuscadorComponent implements OnInit {
	formularioBuscador!: FormGroup;
	options$!: any;
	optionsDest$!: any;
	filteredOrigin!: Observable<string[]>;
	filteredDest!: Observable<string[]>;
	constructor(
		private fb: FormBuilder,
		private route: Router,
		private searchService: BuscadorService
	) {}
	ngOnInit(): void {
		this.formularioBuscador = this.fb.group({
			origen: ["", [Validators.required]],
			destino: ["", [Validators.required]],
		});
		this.searchService.getDestinations().subscribe((data: any) => {});
	}

	onSubmit(): void {
		if (this.formularioBuscador.valid) {
			this.route.navigate([
				"search/destination" +
					"/" +
					this.formularioBuscador.value.destino,
			]);
		}
	}
	tabActive: number = 1;
	setActive(indice: number) {
		this.tabActive = indice;
	}
	onSearchChange(q: string): void {
		this.options$ = this.searchService.getOrigins().pipe(
			map((response: any) => {
				if (response && response.cities && q) {
					return response.cities.filter(
						(city: any) =>
							city.name.toLowerCase().indexOf(q.toLowerCase()) >
							-1
					);
				}
				return [];
			})
		);
		this.optionsDest$ = this.searchService.getDestinations().pipe(
			map((response: any) => {
				if (response && response.name && q) {
					return response.name.filter(
						(name: any) =>
							name.toLowerCase().indexOf(q.toLowerCase()) > -1
					);
				}
				return [];
			})
		);
	}
}
