import { Component } from "@angular/core";
import { Observable } from "rxjs";
import {
  Destination,
  DestinationsService,
} from "src/app/services/destinations.service";

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
