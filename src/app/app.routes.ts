import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './core/login/components/login-page/login-page.component';
import { AuthLoginGuard } from './core/login/guard/auth-login.guard';
import { AuthGuard } from './core/login/guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthLoginGuard],
  },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' },
];
