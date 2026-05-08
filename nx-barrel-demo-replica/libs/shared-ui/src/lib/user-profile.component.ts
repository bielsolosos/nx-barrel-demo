import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@nx-barrel-demo/shared-services'; // CIRCULAR IMPORT VIA BARREL

@Component({
  selector: 'lib-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: `<div>Perfil do Usuário</div>`,
})
export class UserProfileComponent {
  // Referência estática para forçar a avaliação de AuthService
  static auth = AuthService;
}



