import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="bg-biel-magenta text-white px-4 py-2 rounded-lg font-bold text-xs shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  // O erro de "Cascade Effect" acontece aqui: ao tentar acessar CardComponent via barrel
  static reference = CardComponent;
}
