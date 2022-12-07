import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StockSymbolTwo } from '../../models/stockSymbolAndQuote.interface';

@Component({
  selector: 'app-company-stock-item',
  templateUrl: './company-stock-item.component.html',
  styleUrls: ['./company-stock-item.component.scss']
})
export class CompanyStockItemComponent {
  private _company!: StockSymbolTwo;

  @Input() set company(value: StockSymbolTwo) {
    if (value) {
      this._company = value;
    }
  }
  get company(): StockSymbolTwo { return this._company; }

  @Output() removeSymbolEvent = new EventEmitter<string>();

  removeSymbol(symbol: string) {
    this.removeSymbolEvent.emit(symbol)
  }
}
