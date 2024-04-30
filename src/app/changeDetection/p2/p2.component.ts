import { Component, inject } from '@angular/core';
import { P21Component } from "../p21/p21.component";
import { SignalService } from '../signal.service';


@Component({
  selector: 'app-p2',
  standalone: true,
  templateUrl: './p2.component.html',
  styleUrl: './p2.component.css',
  imports: [P21Component],
})
export class P2Component {

  aFakeFunction() {
    /* eslint-disable */console.log('aFakeFunction in app-p2');
    return 'aFakeFunction in app-p2';
  }
}
