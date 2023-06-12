import {Component, Input} from '@angular/core';
import {FormInfo} from "../../../utils/FormInfo";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input() formInfo: FormInfo = {id: 0, type: ''}
  @Input() showForm: boolean = false;
}
