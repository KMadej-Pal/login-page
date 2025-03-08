import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function customEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;
    
    if (value && !emailPattern.test(value)) {
      return { invalidEmail: true };
    }
    
    return null; 
  };
}
