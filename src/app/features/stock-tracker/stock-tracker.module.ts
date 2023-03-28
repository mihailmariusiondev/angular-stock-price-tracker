import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';


import { COMPONENTS } from './components';
import { PAGES } from './pages';
import { SERVICES } from './services';
import { StockTrackerRoutingModule } from './stock-tracker-routing.module';


@NgModule({
  declarations: [
    PAGES,
    COMPONENTS
  ],
  imports: [
    SharedModule,
    StockTrackerRoutingModule,
  ],
  /*
  Tip: When we generate services using ng g s <path>/<service-name> the resulting service will be providedIn: ‘root’ by default
  which is not the best solution for feature specific service. Such a solution would NOT prevent importing of that service
  by other features and hence breaking feature isolation!
  Feature specific services can be scoped to that feature by removing the providedIn: 'root' from their @Injectable() decorators
  and adding them to the providers: [ ] array of the lazy feature module instead!
  */
  providers: [

    SERVICES,
  ],
})
export class StockTrackerModule { }
