import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  userData$!: Observable<any> ;

  constructor(private dataService: DataService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.userData$ =this.dataService.getUserData();
  }

  logout(){
   this.authService.logout()
   this.router.navigate(['/login']);
  }
}
