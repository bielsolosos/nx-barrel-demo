import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '@demo/shared-services';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div
      class="bg-biel-panel border border-biel-border p-5 rounded-2xl shadow-xl hover:border-biel-magenta/50 transition-colors group"
    >
      <div class="flex justify-between items-start mb-4">
        <div
          class="bg-biel-magenta/10 text-biel-magenta px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest"
        >
          {{ tag }}
        </div>
        <div class="text-biel-dim text-[10px]">{{ time }}</div>
      </div>
      <h3
        class="text-biel-text font-bold text-lg mb-2 group-hover:text-biel-magenta transition-colors"
      >
        {{ title }}
      </h3>
      <p class="text-biel-dim text-sm leading-relaxed mb-6">
        {{ description }}
      </p>
      <lib-button>Ver detalhes</lib-button>
    </div>
  `,
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() tag = '';
  @Input() time = '';

  // Força a resolução de AuthService na inicialização do módulo da Lib UI
  static auth = AuthService;
}
