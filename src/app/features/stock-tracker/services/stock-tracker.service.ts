import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsiderSentiment } from 'shared/models/insiderSentiment.interface';
import { Quote } from 'shared/models/quote.interface';
import { SymbolResult } from 'shared/models/symbol.interface';

@Injectable()
export class StockTrackerService {
  private readonly API_KEY = 'bu4f8kn48v6uehqi3cqg';
  private readonly API_BASE_URL = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) { }

  getQuote(symbol: string): Observable<Quote> {
    return this.http.get<Quote>(`${this.API_BASE_URL}/quote`, {
      params: {
        token: this.API_KEY,
        symbol
      }
    })
  }

  searchBySymbol(symbol: string): Observable<SymbolResult> {
    return this.http.get<SymbolResult>(`${this.API_BASE_URL}/search`, {
      params: {
        token: this.API_KEY,
        q: symbol
      }
    })
  }


  getInsiderSentiment(symbol: string): Observable<InsiderSentiment> {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();

    // Calculate the month and year for 3 months ago
    let fromMonth = currentMonth - 3;
    let fromYear = currentYear;
    if (fromMonth < 0) {
      fromMonth += 12;
      fromYear -= 1;
    }

    // Format the dates as strings in the YYYY-MM-DD format, with a leading zero for the month and day
    const from = `${fromYear}-${fromMonth.toString().padStart(2, '0')}-01`;
    const to = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;

    return this.http.get<InsiderSentiment>(`${this.API_BASE_URL}/stock/insider-sentiment`, {
      params: {
        token: this.API_KEY,
        symbol,
        from,
        to
      }
    })
  }


}
