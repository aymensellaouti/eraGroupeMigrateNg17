import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  private counter = signal(0);
  counter$ = this.counter.asReadonly();
  constructor() {}
  increment() {
    this.counter.update((counter) => counter + 1);
  }
}
