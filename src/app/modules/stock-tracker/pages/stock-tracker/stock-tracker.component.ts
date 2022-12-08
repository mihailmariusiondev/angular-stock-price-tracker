import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '@core/services/local-storage.service';
import { DuplicateSymbolValidator } from '@shared/validators/duplicate-symbol.validator';
import { NoWhiteSpaceValidator } from '@shared/validators/no-whitespace.validator';
import { StockSymbolQuote } from '@stock-tracker/models/stockSymbolAndQuote.interface';
import { StockTrackerService } from '@stock-tracker/services/stock-tracker.service';
import { combineLatest, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss'],
})
export class StockTrackerComponent implements OnInit, OnDestroy {
  stockForm: FormGroup;
  companyStockCombined: StockSymbolQuote[] = [];
  localStorageKey = 'stockSymbolAndQuote';
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder, private stockTrackerService: StockTrackerService, private localStorageService: LocalStorageService) {
    const duplicateSymbolValidator = new DuplicateSymbolValidator(this.localStorageService);
    this.stockForm = fb.group({
      symbol: new FormControl('', { validators: [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(5),
            duplicateSymbolValidator.duplicateSymbolValidator(this.localStorageKey),
            NoWhiteSpaceValidator.whiteSpace()
          ],
          // updateOn: 'change'
        }),
    });
  }


  ngOnInit() {
    this.getSymbols();
  }


  getSymbols() {
    const localStorageSymbols = this.localStorageService.getItem(this.localStorageKey);
    if (localStorageSymbols) {
      this.companyStockCombined = JSON.parse(localStorageSymbols) as StockSymbolQuote[];
    }
  }

  addSymbol() {
    const stockSymbol = this.stockForm.value.symbol?.toUpperCase();
    if (!stockSymbol) return;

    const symbol$ = this.stockTrackerService.searchBySymbol(stockSymbol).pipe(take(1));
    const quote$ = this.stockTrackerService.getQuote(stockSymbol).pipe(take(1));

    // Merge both observables into one single object and store the data in localStorage
    combineLatest([symbol$, quote$])
      .pipe(
        takeUntil(this.destroy$),
        tap(([symbol, quote]) => {
          const stockSymbol: StockSymbolQuote = {
            stockSymbol: symbol.result[0],
            quote: quote
          };
          this.companyStockCombined = [...this.companyStockCombined, stockSymbol];
          this.localStorageService.setItem(this.localStorageKey, JSON.stringify(this.companyStockCombined));
          this.stockForm.reset();
        })
      )
      .subscribe();
  }

  removeAllSymbols() {
    this.localStorageService.removeItem(this.localStorageKey);
    this.companyStockCombined = [];
  }

  removeSymbol(symbol: string) {
    const index = this.companyStockCombined.findIndex(companyAndQuote => companyAndQuote.stockSymbol.symbol === symbol);
    if (index >= 0) {
      this.companyStockCombined.splice(index, 1);
      this.localStorageService.setItem(this.localStorageKey, JSON.stringify(this.companyStockCombined));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
