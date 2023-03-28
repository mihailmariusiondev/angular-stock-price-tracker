import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StockSymbolQuote } from 'shared/models/stockSymbolAndQuote.interface';

@Component({
  selector: 'app-company-stock-item',
  templateUrl: './company-stock-item.component.html',
  styleUrls: ['./company-stock-item.component.scss']
})
export class CompanyStockItemComponent {
  private _company!: StockSymbolQuote;

  @Input() set company(value: StockSymbolQuote) {
    if (value) {
      this._company = value;
    }
  }
  get company(): StockSymbolQuote { return this._company; }

  @Output() removeSymbolEvent = new EventEmitter<string>();

  removeSymbol(symbol: string) {
    this.removeSymbolEvent.emit(symbol)
  }
}
