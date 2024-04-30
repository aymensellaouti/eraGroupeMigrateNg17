import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-premier-exemple',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './premier-exemple.component.html',
  styleUrl: './premier-exemple.component.css',
})
export class PremierExempleComponent {
  x = signal(5);
  y = signal(7);

  xx = 5;
  yy = 7;
  coeff = 5;
  z = computed(() => this.coeff * (this.x() + this.y()));
  zz = computed(() => this.xx + this.yy);
}
