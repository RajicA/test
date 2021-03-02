import { FormGroup, FormArray } from '@angular/forms';
import { controlsMap } from './controls';

export function formatData(patientForm: FormGroup, addrForm: FormArray): string {
  let invalid = [];
  const addrInvalid = {};

  for (const name in patientForm.controls) {
    if (patientForm.controls[name].invalid) {
      invalid.push(controlsMap[name]);
    }
  }

  let i = 1;
  addrForm.controls.forEach(control => {
    const prop = 'Address ' + i;
    addrInvalid[prop] = [];
    for (const fieldName in control['controls']) {
      if (control['controls'][fieldName].invalid) {
        addrInvalid[prop].push(controlsMap[fieldName]);
      }
    }
    i++;
  });

  if (invalid.length) {
    let data = '<br>';

    invalid.forEach(invalidGlobalField => {
      if (invalidGlobalField != "Addresses") {
        data += invalidGlobalField + '<br>';
      }
    })

    data += '<br>';

    if (invalid.find(invalidField => invalidField == 'Addresses')) {
      for (const invalidAddressField in addrInvalid) {
        data += invalidAddressField + '<br><br>';
        addrInvalid[invalidAddressField].forEach(value => {
          data += value + '<br>';
        })
        data += '<br>';
      }

      data += '<br>';
    }

    return data;
  }

  return '';
}
