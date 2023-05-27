import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DestinationsService } from "src/app/services/destinations.service";
import { Destination } from "src/app/models/destination";

@Component({
  selector: "app-destination-update-details",
  templateUrl: "./destination-update-details.component.html",
  styleUrls: ["./destination-update-details.component.css"],
})
export class DestinationUpdateDetailsComponent implements OnInit {
  destination!: Destination;

  destinationFormData!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const destinationIdFromRoute = Number(routeParams.get("destinationId"));

    this.destinationService.getBy(destinationIdFromRoute).subscribe((data) => {
      this.destinationFormData = this.formBuilder.group({
        name: data.name,
        city: data.city.name,
        description: data.description,
        image: data.gallery,
      });
    });

    this.destinationService.getBy(destinationIdFromRoute).subscribe((data) => {
      this.destination = data;
    });
  }

  onSubmit(): void {
    this.destinationService
      .update(this.destinationFormData, this.destination.id)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
