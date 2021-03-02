
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PatientFormFactory } from '../../shared/patient-form.factory';

@Component({
  selector: 'test-patient-new',
  templateUrl: './patient-new.component.html',
  styleUrls: ['./patient-new.component.scss'],
})
export class PatientNewComponent implements OnInit {

  patientForm: FormGroup = this.patientFormFactory.build();

  constructor(private patientFormFactory: PatientFormFactory) { }

  ngOnInit() {

  }

  onSubmit() {
  }
}
