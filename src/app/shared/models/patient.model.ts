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
