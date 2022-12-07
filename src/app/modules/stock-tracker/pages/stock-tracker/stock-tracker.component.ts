import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { combineLatest, take, tap } from 'rxjs';
import { companyAndQuote } from '../../models/companyandquote';
import { StockTrackerService } from '../../services/stock-tracker.service';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss'],
})
export class StockTrackerComponent implements OnInit {

  stockForm: FormGroup;
  companyStockCombined: companyAndQuote[] = [];
  localStorageKey = 'companiesAndQuotes';

  constructor(private fb: FormBuilder, private stockTrackerService: StockTrackerService) {
    this.stockForm = fb.group({
      symbol: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), this.duplicateSymbolValidator, this.noWhiteSpaceValidator]]
    });
  }

  ngOnInit() {
    this.getSymbols();
  }

  getSymbols() {
    let localStorageSymbols = localStorage.getItem(this.localStorageKey);
    if (localStorageSymbols) {
      this.companyStockCombined = JSON.parse(localStorageSymbols) as companyAndQuote[];
    }
  }

  addSymbol() {
    const stockSymbol = this.stockForm.value.symbol?.toUpperCase();
    if (!stockSymbol) return;

    let company$ = this.stockTrackerService.getCompanyName(stockSymbol).pipe(take(1));
    let quote$ = this.stockTrackerService.getQuote(stockSymbol).pipe(take(1));

    combineLatest([company$, quote$])
      .pipe(
        tap(([quote, company]) => {
          const companyAndQuote: companyAndQuote = { ...quote, ...company };
          this.companyStockCombined = [...this.companyStockCombined, companyAndQuote];
          localStorage.setItem(this.localStorageKey, JSON.stringify(this.companyStockCombined));
          this.stockForm.reset();
        })
      )
      .subscribe();
    ;
  }


  removeSymbol(symbol: string) {
    const index = this.companyStockCombined.findIndex(companyAndQuote => companyAndQuote.symbol === symbol);
    if (index >= 0) {
      this.companyStockCombined.splice(index, 1);
      localStorage.setItem('companiesAndQuotes', JSON.stringify(this.companyStockCombined));
    }
  }

  duplicateSymbolValidator(control: FormControl) {
    if (!control.value) return null;
    let localStorageSymbols = localStorage.getItem('companiesAndQuotes');
    let symbols: companyAndQuote[] = localStorageSymbols ? JSON.parse(localStorageSymbols) : [];

    if (symbols.find(s => s.symbol === control.value.toUpperCase())) {
      return { duplicate: true };
    }
    return null;
  }

  public noWhiteSpaceValidator(control: FormControl) {
    const isSpace = (control.value || '').match(/\s/g);
    return isSpace ? { whitespace: true } : null;
  }

}
