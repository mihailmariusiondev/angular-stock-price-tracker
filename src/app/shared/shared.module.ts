import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';

/*
⚠️ TIP: Shared module will be imported by many lazy loaded features and because of that it should NEVER
implement any services (providers: [ ]) and only contain declarables (components, directives and pipes) and modules (which only contain declarables).
The reason for that is that every lazy loaded module would get its own service instance which
is almost never what we want because in most cases we expect services to be global singletons!
If we want create “shared” services used in many parts of our application we should implement them
in the /core folder and use providedIn: 'root' syntax without putting them in providers: [ ] of any module…
*/

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES, PIPES],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    COMPONENTS,
    DIRECTIVES,
    PIPES,
  ],
})
export class SharedModule {}
