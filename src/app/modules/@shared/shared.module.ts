import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';

@NgModule({
  declarations: [
    COMPONENTS,
    DIRECTIVES,
    PIPES
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    COMPONENTS,
    DIRECTIVES,
    PIPES
  ]
})
export class SharedModule { }
