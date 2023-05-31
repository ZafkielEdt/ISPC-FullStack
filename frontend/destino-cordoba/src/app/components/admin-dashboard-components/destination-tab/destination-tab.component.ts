import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import {
  Destination,
  DestinationsService,
} from "src/app/services/destinations.service";

@Component({
  selector: "app-destination-tab",
  templateUrl: "./destination-tab.component.html",
  styleUrls: ["./destination-tab.component.css"],
})
export class DestinationTabComponent implements OnInit, OnDestroy {
  suscribe: Subscription | undefined;
  destinations!: Destination[];
  windowSize: boolean = false;

  constructor(private destinationService: DestinationsService) {
    this.windowSize = window.innerWidth > 768;
  }

  deleteDestination(id: number) {
    this.destinationService.deleteBy(id).subscribe({
      next: () => {},
      error: (error) => {
        throw error;
      },
    });
  }

  ngOnInit(): void {
    this.suscribe = this.destinationService.getAll().subscribe((res) => {
      this.destinations = res.results;
    });
  }

  ngOnDestroy(): void {
    this.suscribe?.unsubscribe();
  }
}
