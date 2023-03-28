import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core";
import { SharedModule } from "./shared";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,

    // Shared module should only be imported by each module individually
    // We're importing it here (in the app.module.ts) because we need the spinner component
    SharedModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
