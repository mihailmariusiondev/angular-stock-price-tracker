import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { StockSymbolQuote } from 'shared/models/stockSymbolAndQuote.interface';

@Injectable()
export class SentimentGuard implements CanActivate {
  constructor(private router: Router) {}

  // If the stock symbol is not in the localStorage, redirect
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const symbol = route.paramMap.get('symbol');
    const localStorageSymbols = localStorage.getItem('stockSymbolAndQuote');
    const stockSymbolsAndQuote: StockSymbolQuote[] = localStorageSymbols ? JSON.parse(localStorageSymbols) : [];

    if (!stockSymbolsAndQuote.find(s => s.stockSymbol.symbol === symbol)) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
