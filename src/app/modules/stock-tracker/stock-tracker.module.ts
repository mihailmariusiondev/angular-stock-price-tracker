import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';

import { StockTrackerRoutingModule } from './stock-tracker-routing.module';
import { CompanyStockComponent } from './components/company-stock/company-stock.component';
import { CompanySentientComponent } from './components/company-sentient/company-sentient.component';


@NgModule({
  declarations: [
    StockTrackerComponent,
    CompanyStockComponent,
    CompanySentientComponent
  ],
  imports: [
    SharedModule,
    StockTrackerRoutingModule
  ],
})
export class StockTrackerModule { }
