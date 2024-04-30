import { Component, inject } from '@angular/core';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-p21',
  standalone: true,
  imports: [],
  templateUrl: './p21.component.html',
  styleUrl: './p21.component.css',
})
export class P21Component {
  signalService = inject(SignalService);
  aFakeFunction() {
    console.log('aFakeFunction in app-p21');
    return 'aFakeFunction in app-p21';
  }
  f() {
    this.signalService.increment();
  }
}
