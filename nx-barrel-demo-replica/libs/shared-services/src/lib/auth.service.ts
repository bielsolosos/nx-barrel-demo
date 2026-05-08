import { Injectable } from '@angular/core';
import { THEME_CONFIG } from '@nx-barrel-demo/shared-ui'; // GATILHO DO ERRO

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Acesso agressivo: Se THEME_CONFIG não estiver pronto, BOOM.
  static primaryColor = THEME_CONFIG.primaryColor;

  constructor() {
    console.log('--- AuthService Replica nx-barrel-demo Inicializado ---');
    console.log('Cor primária do tema:', THEME_CONFIG.primaryColor);
  }
}



