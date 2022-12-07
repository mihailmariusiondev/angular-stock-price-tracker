import { Component, EventEmitter, Input, Output } from '@angular/core';
import { companyAndQuote } from '../../models/companyandquote';

@Component({
  selector: 'app-company-stock-item',
  templateUrl: './company-stock-item.component.html',
  styleUrls: ['./company-stock-item.component.scss']
})
export class CompanyStockItemComponent {
  private _company!: companyAndQuote;

  @Input() set company(value: companyAndQuote) {
    if (value) {
      this._company = value;
    }
  }
  get company(): companyAndQuote { return this._company; }

  @Output() removeSymbolEvent = new EventEmitter<string>();

  removeSymbol(symbol: string) {
    this.removeSymbolEvent.emit(symbol)
  }
}
