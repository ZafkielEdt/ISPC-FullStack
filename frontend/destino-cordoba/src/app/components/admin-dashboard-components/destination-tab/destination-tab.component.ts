import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { DestinationsService } from "src/app/services/destinations.service";
import { Destination } from "src/app/models/destination";

@Component({
  selector: "app-destination-tab",
  templateUrl: "./destination-tab.component.html",
  styleUrls: ["./destination-tab.component.css"],
})
export class DestinationTabComponent {
  destinations$!: Observable<Destination[]>;
  windowSize: boolean = false;

  constructor(private destinationService: DestinationsService) {
    this.destinationService.getAll().subscribe({
      next: (data) => {
        console.log(data)
      },})
    this.windowSize = window.innerWidth > 768;
  }

  deleteDestination(id: number) {
    this.destinationService.deleteBy(id).subscribe({
      next: () => {
        
      },
      error: (error) => {
        throw error;
      },
    });
  }
}
