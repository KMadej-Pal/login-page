import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [CommonModule, ReactiveFormsModule, TitleCasePipe],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input() label = '';
  @Input() control!: FormControl;
  @Input() type = 'text';

  get isInvalid() {
    return (
      this.control?.invalid && (this.control?.dirty || this.control?.touched)
    );
  }

  get errors(): string[] {
    const errors: string[] = [];
    if (this.control?.errors) {
      for (const key in this.control.errors) {
        if (this.control.errors[key]) {
          switch (key) {
            case 'required':
              errors.push('This field is required.');
              break;
            case 'invalidEmail':
              errors.push('Invalid email address.');
              break;
            default:
              errors.push('Invalid input.');
          }
        }
      }
    }
    return errors;
  }
}
