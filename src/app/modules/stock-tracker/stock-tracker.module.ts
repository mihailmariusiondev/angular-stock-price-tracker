import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { StockTrackerComponent } from './pages/stock-tracker/stock-tracker.component';

import { CompanyStockItemComponent } from './components/company-stock-item/company-stock-item.component';
import { CompanySentimentComponent } from './pages/company-sentiment/company-sentiment.component';
import { StockTrackerRoutingModule } from './stock-tracker-routing.module';


@NgModule({
  declarations: [
    StockTrackerComponent,
    CompanyStockItemComponent,
    CompanySentimentComponent
  ],
  imports: [
    SharedModule,
    StockTrackerRoutingModule
  ],
})
export class StockTrackerModule { }
