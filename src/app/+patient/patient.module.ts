import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PatientComponent } from './containers/patient.component';
import { PatientDetailsModule } from './modules/patient-details/patient-details.module';
import { PatientListModule } from './modules/patient-list/patient-list.module';
import { PatientNewModule } from './modules/patient-new/patient-new.module';
import { PatientRoutingModule } from './patient-routing.module';

@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    PatientListModule,
    PatientNewModule,
    PatientDetailsModule,
  ],
})
export class PatientModule { }
