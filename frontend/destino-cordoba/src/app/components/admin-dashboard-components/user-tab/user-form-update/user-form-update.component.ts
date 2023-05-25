import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form-update',
  templateUrl: './user-form-update.component.html',
  styleUrls: ['./user-form-update.component.css']
})
export class UserFormUpdateComponent {
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
}
