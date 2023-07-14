import {Injectable} from '@angular/core';
import {Forms} from "../utils/forms";
import {Subject} from "rxjs";
import {FormData} from "../utils/FormData";

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private readonly forms = Forms

  currentForm: Forms = Forms.AnyForm;

  showForm: boolean = false;

  currentFormData: FormData = {id: 0, action: 'update', formType: Forms.AnyForm, showForm: false};

  private changeCurrentForm: Subject<FormData> = new Subject<FormData>()

  constructor() {
    this.changeCurrentForm.subscribe((res) => {
      this.showForm = res.showForm
      this.currentForm = res.formType
      this.currentFormData = res
    })
  }

  changeForm(action: 'update' | 'create', formType: Forms, showForm: boolean, id?: number):void {
    this.changeCurrentForm.next({id, action, formType, showForm})
  }
}
