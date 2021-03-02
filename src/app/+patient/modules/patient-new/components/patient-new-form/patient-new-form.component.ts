import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { filter } from 'rxjs/operators';
import { NzModalService } from 'ng-zorro-antd/modal';

import { PatientFormFactory } from '../../shared/patient-form.factory';
import { Doctor } from 'app/shared/models/doctor.model';
import { doctors } from 'app/shared/utils/doctors-mock';
import { formatData } from 'app/shared/utils/formatter';
import { CrudService } from 'app/shared/services/crud.service';
import { Patient, patientMapper } from 'app/shared/models/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'test-patient-new-form',
  templateUrl: './patient-new-form.component.html',
  styleUrls: ['./patient-new-form.component.scss'],
})
export class PatientNewFormComponent implements OnInit, OnDestroy {

  @Input() patientForm: FormGroup;

  doctorId: number;
  filteredDoctors: Doctor[] = [];

  doctorsSource = [];

  private subscriptions = new Subscription()

  get addressesControl(): FormArray {
    return this.patientForm.get('addresses') as FormArray;
  }
  get birthDateControl(): FormControl {
    return this.patientForm.get('birthDate') as FormControl;
  }
  get vatCodeControl(): FormControl {
    return this.patientForm.get('vat') as FormControl;
  }
  get doctorControl(): FormControl {
    return this.patientForm.get('doctor') as FormControl;
  }

  constructor(
    private patientFormFactory: PatientFormFactory,
    private modal: NzModalService,
    private crudService: CrudService,
    private router: Router
  ) { }

  ngOnInit() {
    this.doctorsSource = doctors.map(d => {
      return { id: d.id, name: d.firstName + ' ' + d.lastName }
    });
    this.addressesControl.push(this.patientFormFactory.addAddressesGroup({ type: 'HOME' }));
    this.watchBirthDateControl();
    this.watchDoctorControl();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  addNewAddress() {
    this.addressesControl.push(this.patientFormFactory.addAddressesGroup());
  }

  deleteAddress(index: number) {
    this.addressesControl.removeAt(index);
  }

  watchBirthDateControl() {
    this.subscriptions.add(this.birthDateControl.valueChanges
      .pipe(filter(data => !!data))
      .subscribe(data => {
        if (moment().diff(data, 'years') >= 18) {
          this.vatCodeControl.setValidators([Validators.required]);
        } else {
          this.vatCodeControl.clearValidators();
        }
        this.vatCodeControl.updateValueAndValidity();
      }));
  }

  watchDoctorControl() {
    this.subscriptions.add(this.doctorControl.valueChanges
      .pipe(filter(data => !!data))
      .subscribe(data => {
        if (typeof data === 'string') {
          this.filteredDoctors = [...this.doctorsSource].filter(d => d.name.toLocaleLowerCase().indexOf(data.toLowerCase()) !== -1);
        } else if (typeof data === 'number') {
          this.doctorId = data;
        }
      }));
  }

  transformPhone(event: any, index: number) {
    let phone = event.target.value.replace(/\s/g, '');
    if (!phone) {
      return;
    }
    if (!phone.includes('+')) {
      phone = '+39' + phone;
    }
    this.addressesControl.controls[index].get('phone').setValue(phone);
  }

  changeType(type: string, index: number) {
    if (!type.replace(/\s/g, '')) {
      return;
    }
    if (['WORK', 'RELATIVE'].includes(type)) {
      let control: AbstractControl = this.addressesControl.controls[index];
      control.get('name').setValidators([Validators.required]);
    }
  }

  onSave() {
    const data = formatData(this.patientForm, this.addressesControl);

    if (data) {
      this.modal.info({
        nzTitle: 'Ivalid fields',
        nzContent: data
      });
    } else {
      const patient = patientMapper(this.patientForm.getRawValue());

      this.crudService.addPatient(patient)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    }
  }



}
