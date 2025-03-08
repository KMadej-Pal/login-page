import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { customEmailValidator } from '../../../validators/email-validator';
import { LoginFormModel } from '../../models/login-form.model';
import { AuthService } from '../../services/auth.service';
import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  imports: [ReactiveFormsModule, FormInputComponent],
})
export class LoginPageComponent {
  loginForm = new FormGroup<LoginFormModel>({
    email: new FormControl('', [Validators.required,customEmailValidator()]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const logged = this.authService.login();
      if (logged) this.router.navigate(['/home']);
    }
  }
}
