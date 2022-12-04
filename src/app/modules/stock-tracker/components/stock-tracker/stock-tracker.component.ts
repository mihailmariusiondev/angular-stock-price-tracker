import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss']
})
export class StockTrackerComponent implements OnInit {
  stockForm = new FormGroup({
    symbol: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5), this.duplicateSymbolValidator]),
  });

  // Create a new property to hold the list of stock symbols
  symbols: string[] = [];

  ngOnInit() {
    this.getSymbols();
  }

  // Load the symbols from local storage, if they exist
  getSymbols() {
    let localStorageSymbols = localStorage.getItem('symbols');
    if (localStorageSymbols) {
      this.symbols = JSON.parse(localStorageSymbols);
    }
  }

  addSymbol() {
    if (!this.stockForm.value.symbol) {
      return;
    }

    // Check if the symbol is already in local storage
    let localStorageSymbols = localStorage.getItem('symbols');
    let symbols: string[] = localStorageSymbols ? JSON.parse(localStorageSymbols) : [];
    if (symbols.includes(this.stockForm.value.symbol)) {
      return;
    }

    // Push the new symbol to the list of symbols and save it to local storage
    symbols.push(this.stockForm.value.symbol);
    localStorage.setItem('symbols', JSON.stringify(symbols));
    this.stockForm.reset();
  }

  // Check if the symbol is already in local storage
  duplicateSymbolValidator(control: FormControl) {
    let localStorageSymbols = localStorage.getItem('symbols');
    let symbols: string[] = localStorageSymbols ? JSON.parse(localStorageSymbols) : [];
    if (symbols.includes(control.value)) {
      return { duplicate: true };
    }
    return null;
  }
}
