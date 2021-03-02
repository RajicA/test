import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Patient } from '../models/patient.model';
import { patients as mock } from '../utils/patients-mock';

@Injectable({ providedIn: 'root' })
export class CrudService {

  getPatients(): Observable<Patient[]> {
    if (!localStorage.getItem('patients')) {
      localStorage.setItem('patients', JSON.stringify(mock));
    }
    return of(JSON.parse(localStorage.getItem('patients')));
  }

  getPatient(id: number): Observable<Patient> {
    const patients = JSON.parse(localStorage.getItem('patients'));
    return of(patients.find((m: Patient) => m.id == id));
  }

  addPatient(patient: Patient): Observable<Patient> {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));
    return of(patient);
  }
}
