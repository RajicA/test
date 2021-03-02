
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PatientDetailsComponent } from './containers/patient-details/patient-details.component';

@NgModule({
  declarations: [
    PatientDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class PatientDetailsModule { }
