import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../../assets/userData.json'

@Injectable({
  providedIn: 'root',
})
export class DataService {

  getUserData(): Observable<any>{
    return of(data)
  }
}
