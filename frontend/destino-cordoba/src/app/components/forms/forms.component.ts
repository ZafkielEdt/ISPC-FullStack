import {Component} from '@angular/core';
import {FormData} from "../../utils/FormData";
import {FormsService} from "../../services/forms.service";
import {Forms} from "../../utils/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  currentDataForm!: FormData;

  constructor(private formService: FormsService) {
  }

  showForm(): boolean {
    this.getFormData()
    return this.formService.showForm && this.formService.currentForm !== Forms.AnyForm;
  }

  private getFormData(): void {
    this.currentDataForm = this.formService.currentFormData
  }

  protected readonly Forms = Forms;
}
