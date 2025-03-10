import { FormControl } from '@angular/forms';

export interface LoginFormModel {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
