import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // Declare a new Subject
  private loadingSubject = new Subject<boolean>();

  // Create an observable stream of the loading state
  loading$ = this.loadingSubject.asObservable();

  constructor() { }

  // Function to set the loading state
  setLoading(loading: boolean) {
    // Use the next method of the Subject to update the loading state
    this.loadingSubject.next(loading);
  }
}
