import { Component, OnInit } from '@angular/core';
import { CrudService } from 'app/shared/services/crud.service';
import { Patient } from 'app/shared/models/patient.model';

@Component({
  selector: 'test-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {

  data: any;

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getPatients()
    .subscribe((patients: Patient[]) => {
      console.log(patients);
      this.data = {patients};
    });
  }
}
