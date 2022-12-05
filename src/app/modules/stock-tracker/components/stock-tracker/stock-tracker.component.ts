import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { company } from '../../models/company';
import { quote } from '../../models/quote';
import { StockTrackerService } from '../services/stock-tracker.service';

type companyAndQuote = company & quote;

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss'],
})
export class StockTrackerComponent implements OnInit {

  // Our stock tracker form
  stockForm = new FormGroup({
    symbol: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5), this.duplicateSymbolValidator]),
  });

  companyStockCombined$!: Observable<any>;
  companiesAndQuotes: companyAndQuote[] = []

  constructor(private stockTrackerService: StockTrackerService) {}

  ngOnInit() {
    this.getSymbols();
  }

  // Load the symbols from local storage, if they exist
  getSymbols() {
    let localStorageSymbols = localStorage.getItem('companiesAndQuotes');
    if (localStorageSymbols) {
      this.companiesAndQuotes = JSON.parse(localStorageSymbols);
    }
  }

  addSymbol() {
    const stockSymbol = this.stockForm.value.symbol?.toUpperCase()
    if (!stockSymbol) return;

    let company$ = this.stockTrackerService.getCompanyName(stockSymbol)
    let quote$ = this.stockTrackerService.getQuote(stockSymbol)

    // Combine the latest values emitted by quote$ and company$
    this.companyStockCombined$ = combineLatest([company$, quote$]);

    this.companyStockCombined$.subscribe(([quote, company]) => {
      const companyAndQuote: companyAndQuote = Object.assign({}, quote, company);

      // Push the new symbol to the list of symbols and save it to local storage
      this.companiesAndQuotes = [...this.companiesAndQuotes, companyAndQuote]
      localStorage.setItem('companiesAndQuotes', JSON.stringify(this.companiesAndQuotes));
      this.stockForm.reset();
    });

  }

  // Check if the symbol is already in local storage
  duplicateSymbolValidator(control: FormControl) {
    if(!control.value) return null
    let localStorageSymbols = localStorage.getItem('companiesAndQuotes');
    let symbols: companyAndQuote[] = localStorageSymbols ? JSON.parse(localStorageSymbols) : [];

    // Check if the symbol is already in the companiesAndQuotes array
    if (symbols.some(s => s.symbol === control.value)) {
      return { duplicate: true };
    }
    return null;
  }
}
