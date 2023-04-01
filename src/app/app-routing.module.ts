import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Routes (lazy loaded)
  {
    path: 'stock-market-management',
    loadChildren: () => import('./features/stock-tracker/stock-tracker.module').then((m) => m.StockTrackerModule),
  },
  {
    path: 'widgets-management',
    loadChildren: () => import('./features/widgets/widgets.module').then((m) => m.WidgetsModule),
  },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
