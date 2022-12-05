import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { quote } from '../../models/quote';
import { company } from '../../models/company';

@Injectable({
  providedIn: 'root'
})
export class StockTrackerService {
  private readonly API_KEY = 'bu4f8kn48v6uehqi3cqg';
  private readonly API_BASE_URL = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) { }

  getQuote(symbol: string): Observable<quote> {
    return this.http.get(`${this.API_BASE_URL}/quote`, {
      params: {
        token: this.API_KEY,
        symbol
      }
    }).pipe(
      tap(console.log)
    );
  }

  getCompanyName(symbol: string): Observable<company> {
    return this.http.get(`${this.API_BASE_URL}/search`, {
      params: {
        token: this.API_KEY,
        q: symbol
      }
    }).pipe(
      map((data: any) => data.result[0]),
      tap(console.log)
    );
  }
}
