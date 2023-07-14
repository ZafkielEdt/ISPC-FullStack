import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tables} from "../../../utils/tables";
import {FormsService} from "../../../services/forms.service";
import {Forms} from "../../../utils/forms";

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent {

  @Input() currentTable!: Tables;
  @Input() data: any;
  @Output() hideTable: EventEmitter<Tables> = new EventEmitter<Tables>()
  protected readonly Tables = Tables;

  constructor(private formService: FormsService) {
  }

  hidden() {
    this.hideTable.emit(Tables.AnyTable)
  }

  showForm(action: 'update' | 'create', formType: Forms, showForm:boolean, id?: number): void {
    this.hidden()
    this.formService.changeForm(action, formType, showForm, id)
  }

  protected readonly Forms = Forms;
}
