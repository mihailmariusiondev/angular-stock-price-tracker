import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { StockTrackerComponent } from './pages/stock-tracker/stock-tracker.component';

import { StockTrackerRoutingModule } from './stock-tracker-routing.module';
import { CompanyStockListComponent } from './components/company-stock-list/company-stock-list.component';
import { CompanySentimentComponent } from './pages/company-sentiment/company-sentiment.component';


@NgModule({
  declarations: [
    StockTrackerComponent,
    CompanyStockListComponent,
    CompanySentimentComponent
  ],
  imports: [
    SharedModule,
    StockTrackerRoutingModule
  ],
})
export class StockTrackerModule { }
