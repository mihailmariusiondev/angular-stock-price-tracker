import { Component } from '@angular/core';
import { LoaderService } from 'core/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  // Declare a loading$ property to hold the loading state
  loading$: Observable<boolean>;

  constructor(private loader: LoaderService) {
    // In the constructor, subscribe to the loading$ observable and
    // set the loading property to the latest value emitted by the Subject
    this.loading$ = this.loader.loading$;
  }

}
