import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-company-stock',
  templateUrl: './company-stock.component.html',
  styleUrls: ['./company-stock.component.scss']
})
export class CompanyStockComponent {
  private _company: any;

  @Input() set company(value: any) {
    this._company = value;
  }
  get company(): any { return this._company; }

  @Output() removeEvent = new EventEmitter<string>();

  removeSymbol(symbol: string) {
    this.removeEvent.emit(symbol)
  }
}
