export interface Address {
  type: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;
  name?: string;
}

export interface Patient {
  id: number;
  registeredDate: string;
  firstName: string;
  lastName: string;
  doctor: number;
  addresses: Address[];
}

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
