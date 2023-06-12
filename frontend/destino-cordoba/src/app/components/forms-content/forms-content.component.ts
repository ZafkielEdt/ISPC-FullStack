import {Component, Input} from '@angular/core';
import {FormInfo} from "../../utils/FormInfo";

@Component({
    selector: 'app-forms-content',
    templateUrl: './forms-content.component.html',
    styleUrls: ['./forms-content.component.css']
})
export class FormsContentComponent {


    @Input() showUserForm: boolean = false;
    @Input() showCityForm: boolean = false;
    @Input() showProvinceForm: boolean = false;
    @Input() formInfo: FormInfo = {id: 0, type: ''}
    @Input() showUsersTable: boolean = false;
    @Input() showDestinationsTable: boolean = false;
    @Input() showCitiesTable: boolean = false;
    @Input() showProvincesTable: boolean = false;

    constructor() {
    }
}
