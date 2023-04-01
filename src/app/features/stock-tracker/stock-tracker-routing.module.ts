import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentGuard } from 'core/guards/sentiment.guard';
import { SentimentComponent } from './pages/sentiment/sentiment.component';
import { StockTrackerDashboardComponent } from './pages/stock-tracker-dashboard/stock-tracker-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: StockTrackerDashboardComponent,
  },
  {
    path: 'sentiment/:symbol',
    component: SentimentComponent,
    canActivate: [SentimentGuard],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTrackerRoutingModule { }
