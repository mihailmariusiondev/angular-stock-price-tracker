import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoadingInterceptor } from '@core/interceptors/loading.interceptor';
import { SentimentGuard } from './guards/sentiment.guard';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
    SentimentGuard //TODO check it this is correct
  ],
})
export class CoreModule { }
