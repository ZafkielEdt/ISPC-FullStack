import {Component, Input} from '@angular/core';
import {Tables} from "../../../utils/tables";

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent {

  @Input() currentTable!: Tables;
  @Input() data: any;
  protected readonly Tables = Tables;
}
