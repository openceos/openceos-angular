import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class AngularMaterialModule { }
