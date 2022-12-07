import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CompanyAndQuote } from '../../models/companyandquote';

@Component({
  selector: 'app-company-stock-item',
  templateUrl: './company-stock-item.component.html',
  styleUrls: ['./company-stock-item.component.scss']
})
export class CompanyStockItemComponent {
  private _company!: CompanyAndQuote;

  @Input() set company(value: CompanyAndQuote) {
    if (value) {
      this._company = value;
    }
  }
  get company(): CompanyAndQuote { return this._company; }

  @Output() removeSymbolEvent = new EventEmitter<string>();

  removeSymbol(symbol: string) {
    this.removeSymbolEvent.emit(symbol)
  }
}
