import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <p-button [label]="'Ver Detalhes'" icon="pi pi-search" styleClass="p-button-raised p-button-secondary"></p-button>
  `,
})
export class ButtonComponent {}



