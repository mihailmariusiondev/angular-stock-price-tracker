import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { SharedModule } from 'shared/shared.module';
import { PAGES } from './pages';
import { COMPONENTS } from './components';


@NgModule({
  declarations: [
    PAGES,
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharedModule
  ]
})
export class WidgetsModule { }
