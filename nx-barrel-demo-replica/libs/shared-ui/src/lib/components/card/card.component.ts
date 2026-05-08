import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '@nx-barrel-demo/shared-services'; // GATILHO DO ERRO

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonComponent],
  template: `
    <p-card [header]="title" styleClass="shadow-2 border-1 border-300">
      <p class="m-0">{{ description }}</p>
      <ng-template pTemplate="footer">
        <lib-button></lib-button>
      </ng-template>
    </p-card>
  `,
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';

  // Força a resolução do AuthService na inicialização
  static auth = AuthService;
}



