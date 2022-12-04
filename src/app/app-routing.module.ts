import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Routes
  { path: 'stock-tracker', loadChildren: () => import('./modules/stock-tracker/stock-tracker.module').then(m => m.StockTrackerModule) },
  { path: '', redirectTo: 'stock-tracker', pathMatch: 'full' },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'stock-tracker', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
