import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsDashboardComponent } from './pages/widgets-dashboard/widgets-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsDashboardComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetsRoutingModule {}
