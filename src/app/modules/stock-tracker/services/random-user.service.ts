import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUser } from '@stock-tracker/models/randomuser.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<RandomUser> {
    return this.http.get<RandomUser>('https://randomuser.me/api/');
  }
}
