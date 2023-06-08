import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormInfo} from "../../utils/FormInfo";

@Component({
    selector: 'app-forms-content',
    templateUrl: './forms-content.component.html',
    styleUrls: ['./forms-content.component.css']
})
export class FormsContentComponent {

    provinceForm: FormGroup = this.formBuilder.group({
        name: ['', Validators.required, Validators.min(5)],
        lat: [0, Validators.required],
        lon: [0, Validators.required],
    })

    @Input() showProvinceForm: boolean = false;
    @Input() formInfo: FormInfo = {type: ''}
    @Input() showUsersTable: boolean = false;
    @Input() showDestinationsTable: boolean = false;
    @Input() showCitiesTable: boolean = false;
    @Input() showProvincesTable: boolean = false;

    constructor(private formBuilder: FormBuilder) {
    }
}
