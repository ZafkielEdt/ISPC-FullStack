import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Province } from "src/app/models/province";
import { CityService } from "src/app/services/city.service";
import { ProvinceService } from "src/app/services/province.service";

@Component({
  selector: "app-city-form",
  templateUrl: "./city-form.component.html",
  styleUrls: ["./city-form.component.css"],
})
export class CityFormComponent implements OnInit {
  provinces!: Province[];

  formData = this.formBuilder.group({
    name: "",
    lat: 0,
    lon: 0,
    province: "",
  });

  constructor(
    private cityService: CityService,
    private provinceService: ProvinceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.provinceService.getAll().subscribe((res) => {
      this.provinces = res.results;
    });
  }

  onSubmit() {
    const dataApi = {
      name: this.formData.value.name,
      lat: this.formData.value.lat,
      lon: this.formData.value.lon,
      province: this.provinces.filter((province) => {
        return province.name === this.formData.value.name
          ? province
          : "Not Found";
      })[0].id,
    };

    this.cityService.create(dataApi).subscribe((res) => {
      window.location.reload();
    });
  }
}
