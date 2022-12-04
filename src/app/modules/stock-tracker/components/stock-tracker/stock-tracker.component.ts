import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss']
})
export class StockTrackerComponent implements OnInit {
  stockForm = new FormGroup({
    symbol: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
  });

  // Create a new property to hold the list of stock symbols
  symbols: string[] = [];

  ngOnInit() {
    // Load the symbols from local storage, if they exist
    let localStorageSymbols = localStorage.getItem('symbols');
    if (localStorageSymbols) {
      this.symbols = JSON.parse(localStorageSymbols);
    }
  }

  addSymbol() {
    if (!this.stockForm.value.symbol) {
      return;
    }
    // Push the new symbol to the list of symbols and save it to local storage
    this.symbols.push(this.stockForm.value.symbol);
    localStorage.setItem('symbols', JSON.stringify(this.symbols));
    this.stockForm.reset();
  }

}
