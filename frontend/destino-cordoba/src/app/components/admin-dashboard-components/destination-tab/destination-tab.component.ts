import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Destination, DestinationsService } from "src/app/services/destinations.service";

@Component({
  selector: "app-destination-tab",
  templateUrl: "./destination-tab.component.html",
  styleUrls: ["./destination-tab.component.css"],
})
export class DestinationTabComponent {
  destinations$: Observable<Destination[]>;
  windowSize: boolean = false;

  constructor(private destinationService: DestinationsService) {
    this.destinations$ = this.destinationService.getAll();
    this.windowSize = window.innerWidth > 768;
  }

  deleteDestination(id: number) {
    this.destinationService.deleteBy(id).subscribe({
      next: () => {
        this.destinations$ = this.destinationService.getAll();
      },
      error: (error) => {
        throw error;
      },
    });
  }
}
