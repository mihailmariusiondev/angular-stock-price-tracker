import { Component, EventEmitter, Input, Output } from '@angular/core';
import { companyAndQuote } from '../../models/companyandquote';

@Component({
  selector: 'app-company-stock-list',
  templateUrl: './company-stock-list.component.html',
  styleUrls: ['./company-stock-list.component.scss']
})
export class CompanyStockListComponent {
  private _company!: companyAndQuote;

  @Input() set company(value: companyAndQuote) {
    if (value) {
      this._company = value;
    }
  }
  get company(): companyAndQuote { return this._company; }

  @Output() removeEvent = new EventEmitter<string>();

  removeSymbol(symbol: string) {
    this.removeEvent.emit(symbol)
  }
}
