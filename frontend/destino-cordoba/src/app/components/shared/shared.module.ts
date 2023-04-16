import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
  ],
  exports: [
    MatGridListModule,
    
  ]
})
export class SharedModule { }
