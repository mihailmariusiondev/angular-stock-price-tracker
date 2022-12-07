import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Subject, take, takeUntil, tap } from 'rxjs';
import { NoWhiteSpaceValidator } from 'src/app/modules/@shared/validators/no-whitespace.validator';
import { companyAndQuote } from '../../models/companyandquote';
import { StockTrackerService } from '../../services/stock-tracker.service';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss'],
})
export class StockTrackerComponent implements OnInit, OnDestroy {
  isLoading = false;
  stockForm: FormGroup;
  companyStockCombined: companyAndQuote[] = [];
  localStorageKey = 'companiesAndQuotes';
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder, private stockTrackerService: StockTrackerService) {
    this.stockForm = fb.group({
      symbol: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), this.duplicateSymbolValidator, NoWhiteSpaceValidator.whiteSpace()]]
    });
  }

  ngOnInit() {
    this.getSymbols();
  }

  getSymbols() {
    const localStorageSymbols = localStorage.getItem(this.localStorageKey);
    if (localStorageSymbols) {
      this.companyStockCombined = JSON.parse(localStorageSymbols) as companyAndQuote[];
    }
  }

  addSymbol() {
    const stockSymbol = this.stockForm.value.symbol?.toUpperCase();
    if (!stockSymbol) return;

    const company$ = this.stockTrackerService.getCompanyName(stockSymbol).pipe(take(1));
    const quote$ = this.stockTrackerService.getQuote(stockSymbol).pipe(take(1));

    // Merge both observables into one single object and store the data in localStorage
    combineLatest([company$, quote$])
      .pipe(
        takeUntil(this.destroy$),
        tap(([company, quote]) => {
          const companyAndQuote: companyAndQuote = { ...company, ...quote };
          this.companyStockCombined = [...this.companyStockCombined, companyAndQuote];
          localStorage.setItem(this.localStorageKey, JSON.stringify(this.companyStockCombined));
          this.stockForm.reset();
        })
      )
      .subscribe();
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
    const localStorageSymbols = localStorage.getItem('companiesAndQuotes');
    const symbols: companyAndQuote[] = localStorageSymbols ? JSON.parse(localStorageSymbols) : [];

    if (symbols.find(s => s.symbol === control.value.toUpperCase())) {
      return { duplicate: true };
    }
    return null;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
