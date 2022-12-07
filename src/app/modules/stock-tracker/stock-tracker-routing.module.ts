import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentComponent } from './pages/sentiment/sentiment.component';
import { StockTrackerComponent } from './pages/stock-tracker/stock-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: StockTrackerComponent,
  },
  {
    path: 'sentiment/:symbol',
    component: SentimentComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTrackerRoutingModule { }
