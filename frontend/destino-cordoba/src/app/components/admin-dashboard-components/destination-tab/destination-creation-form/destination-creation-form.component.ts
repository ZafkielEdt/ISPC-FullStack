import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { DestinationsService } from "src/app/services/destinations.service";
import { CityService } from "src/app/services/city.service";
import { City } from "src/app/models/city";

@Component({
  selector: "app-destination-creation-form",
  templateUrl: "./destination-creation-form.component.html",
  styleUrls: ["./destination-creation-form.component.css"],
})
export class DestinationCreationFormComponent implements OnInit {
  cities!: City[];
  city!: City;

  formData = this.formBuilder.group({
    name: "",
    city: "",
    description: "",
    image: "",
  });

  constructor(
    private formBuilder: FormBuilder,
    private destinationService: DestinationsService,
    private cityService: CityService
  ) {}

  onSubmit() {
    const formDataForApi = {
      name: this.formData.value.name || "",
      city: this.cities.filter((c) => c.name === this.formData.value.city)[0],
      description: this.formData.value.description || "",
      images: [this.formData.value.image] || [],
    };
    this.destinationService.post(formDataForApi).subscribe((data) => {
      console.log("Data sended");
    });
  }

  ngOnInit(): void {
    this.cityService.getAll().subscribe((res) => {
      this.cities = res.results;
    });
  }
}
