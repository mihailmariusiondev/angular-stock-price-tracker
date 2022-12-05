import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';

import { StockTrackerRoutingModule } from './stock-tracker-routing.module';
import { CompanyStockComponent } from './components/company-stock/company-stock.component';


@NgModule({
  declarations: [
    StockTrackerComponent,
    CompanyStockComponent
  ],
  imports: [
    SharedModule,
    StockTrackerRoutingModule
  ],
})
export class StockTrackerModule { }
