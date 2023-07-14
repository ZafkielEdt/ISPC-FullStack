import {Forms} from "./forms";

export interface FormData  {
    id?: number;
    action: 'update' | 'create';
    formType: Forms;
    showForm: boolean;
}