import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySentimentComponent } from './pages/company-sentiment/company-sentiment.component';
import { StockTrackerComponent } from './pages/stock-tracker/stock-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: StockTrackerComponent,
  },
  {
    path: 'sentiment/:symbol',
    component: CompanySentimentComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTrackerRoutingModule { }
