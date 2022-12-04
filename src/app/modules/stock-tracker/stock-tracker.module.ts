import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';

import { StockTrackerRoutingModule } from './stock-tracker-routing.module';


@NgModule({
  declarations: [
    StockTrackerComponent
  ],
  imports: [
    SharedModule,
    StockTrackerRoutingModule
  ],
})
export class StockTrackerModule { }
