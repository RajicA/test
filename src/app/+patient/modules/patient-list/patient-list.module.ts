import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    PatientListTableComponent,
} from './components/patient-list-table/patient-list-table.component';
import { PatientListComponent } from './containers/patient-list/patient-list.component';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientListTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PatientListModule { }
