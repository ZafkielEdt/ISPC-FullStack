import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Destination, DestinationsService } from "src/app/services/destinations.service";
import { CityService } from "src/app/services/city.service";
import { City } from "src/app/models/search-options";

@Component({
  selector: "app-destination-update-details",
  templateUrl: "./destination-update-details.component.html",
  styleUrls: ["./destination-update-details.component.css"],
})
export class DestinationUpdateDetailsComponent implements OnInit {
  destination!: Destination;

  formData!: FormGroup;

  cities!: City[];

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationsService,
    private cityService: CityService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const destinationIdFromRoute = Number(routeParams.get("destinationId"));

    this.cityService.getAll().subscribe((res) => {
      this.cities = res.results;
    });

    this.destinationService.getBy(destinationIdFromRoute).subscribe((data) => {
      this.formData = this.formBuilder.group({
        name: data.name,
        city: data.city.name,
        description: data.description,
        image: "",
        title: ""
      });
    });

    this.destinationService.getBy(destinationIdFromRoute).subscribe((data) => {
      this.destination = data;
    });
  }

  onSubmit(): void {

    const formDataForApi = {
      name: this.formData.value.name || "",
      city: this.cities.filter((c) => c.name === this.formData.value.city)[0],
      description: this.formData.value.description || "",
      images: [{
        url: this.formData.value.image,
        title: this.formData.value.title
      }],
    };

    this.destinationService
      .update(this.formData, this.destination.id)
      .subscribe((data) => {
        "Updated"
      });
  }
}
