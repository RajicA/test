import { Patient } from '../models/patient.model';

export function patientMapper(data: any): Patient {
  return {
    id: Math.floor((Math.random() * 10000) + 1),
    registeredDate: new Date().toLocaleDateString(),
    firstName: data.firstName,
    lastName: data.lastName,
    doctor: data.doctor,
    addresses: data.addresses
  }
}
