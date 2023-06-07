import {Component, Input} from '@angular/core';
import {FormInfo} from "../../utils/FormInfo";

@Component({
  selector: 'app-forms-content',
  templateUrl: './forms-content.component.html',
  styleUrls: ['./forms-content.component.css']
})
export class FormsContentComponent {

  @Input() showForm: boolean = false;
  @Input() formInfo: FormInfo = {content: '', type: ''}
  @Input() showUsersTable: boolean = false;
  @Input() showDestinationsTable: boolean = false;
  @Input() showCitiesTable: boolean = false;
  @Input() showProvincesTable: boolean = false;
}
