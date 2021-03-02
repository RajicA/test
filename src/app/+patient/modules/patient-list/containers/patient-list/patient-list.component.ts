import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/shared/services/patient.service';
import { Patient } from 'app/shared/models/patient.model';

@Component({
  selector: 'test-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {

  data: any;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients()
      .subscribe((patients: Patient[]) => {
        console.log(patients);
        this.data = { patients };
      });
  }
}
