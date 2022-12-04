import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockTrackerService {
  private readonly API_KEY = 'bu4f8kn48v6uehqi3cqg';
  private readonly API_BASE_URL = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) { }

  getQuote(symbol: string): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/quote`, {
      params: {
        token: this.API_KEY,
        symbol
      }
    });
  }

  getCompanyName(symbol: string): Observable<string> {
    return this.http.get(`${this.API_BASE_URL}/stock/symbol`, {
      params: {
        token: this.API_KEY,
        exchange: 'US',
        symbol
      }
    }).pipe(
      map((data: any) => data[0].name)
    );
  }
}
