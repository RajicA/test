import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientNewFormComponent } from './components/patient-new-form/patient-new-form.component';
import { PatientNewComponent } from './containers/patient-new/patient-new.component';
import { PatientFormFactory } from './shared/patient-form.factory';

@NgModule({
  declarations: [
    PatientNewComponent,
    PatientNewFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzAutocompleteModule,
    NzDividerModule,
    NzSelectModule,
    NzModalModule,
    NzIconModule,
  ],
  providers: [PatientFormFactory],
})
export class PatientNewModule { }
