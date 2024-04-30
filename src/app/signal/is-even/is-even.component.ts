import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-is-even',
  standalone: true,
  imports: [],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css'
})
export class IsEvenComponent {
  value = input(0);
  isEven = computed(() => this.value() % 2 ? 'is even' : 'is odd');
}
