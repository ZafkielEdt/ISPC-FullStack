import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DestinationsService } from "src/app/services/destinations.service";

@Component({
  selector: "app-destination-creation-form",
  templateUrl: "./destination-creation-form.component.html",
  styleUrls: ["./destination-creation-form.component.css"],
})
export class DestinationCreationFormComponent {
  formData = this.formBuilder.group({
    name: "",
    city: this.formBuilder.group({name: ''}),
    description: "",
    image: "",
  });

  constructor(
    private formBuilder: FormBuilder,
    private destinationService: DestinationsService
  ) {}

  onSubmit() {
    // this.destinationService.post(this.formData).subscribe((data) => {
    //   "Data sended";
    // });
  }
}
