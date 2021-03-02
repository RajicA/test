import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class PatientFormFactory {
  constructor(private formBuilder: FormBuilder) {}

  build(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      vat: [''],
      mail: ['', [Validators.required, Validators.email]],
      doctor: ['', [Validators.required]],
      addresses: this.formBuilder.array([]),
    });
  }

  addAddressesGroup(data?): FormGroup {
    return this.formBuilder.group({
      type: [data?.type || '', [Validators.required]],
      name: [''],
      phone: ['', [Validators.pattern('^\\+?[0-9\\s]+$'), Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }
}
