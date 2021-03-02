import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientComponent } from './containers/patient.component';
import {
  PatientDetailsComponent,
} from './modules/patient-details/containers/patient-details/patient-details.component';
import {
  PatientListComponent,
} from './modules/patient-list/containers/patient-list/patient-list.component';
import {
  PatientNewComponent,
} from './modules/patient-new/containers/patient-new/patient-new.component';

const routes: Routes = [{
  path: '',
  component: PatientComponent,
  children: [
    {
      path: '',
      component: PatientListComponent,
    },
    {
      path: 'create',
      component: PatientNewComponent,
    },
    {
      path: ':patientId',
      component: PatientDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule { }
