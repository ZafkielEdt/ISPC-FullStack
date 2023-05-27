import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { DestinationsService } from "src/app/services/destinations.service";
import { Destination } from "src/app/models/destination";

@Component({
  selector: "app-destinations",
  templateUrl: "./destinations.component.html",
  styleUrls: ["./destinations.component.css"],
})
export class DestinationsComponent {
  destinations$: Observable<Destination[]>;

  constructor(private destinationsService: DestinationsService) {
    this.destinations$ = this.destinationsService.getAll();
  }
}
