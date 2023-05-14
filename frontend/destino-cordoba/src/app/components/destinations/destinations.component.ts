import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  Destination,
  DestinationsService,
} from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
})
export class DestinationsComponent {
  destination$: Destination[] = [];

  constructor(private destinationsService: DestinationsService) {}

  getDestinations() {
    this.destinationsService.getDestinations().subscribe({
      next: (data: Destination[]) => (this.destination$ = data),
    });
  }
}
