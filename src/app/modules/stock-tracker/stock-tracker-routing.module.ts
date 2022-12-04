import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTrackerComponent } from './components/stock-tracker/stock-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: StockTrackerComponent,
    children: [
      { path: 'stock-tracker', component: StockTrackerComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockTrackerRoutingModule { }
