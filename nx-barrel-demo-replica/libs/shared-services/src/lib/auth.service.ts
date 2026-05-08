import { Injectable } from '@angular/core';
import { THEME_CONFIG } from '@nx-barrel-demo/shared-ui'; // GATILHO DO ERRO

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Acesso estático que dispara a avaliação da lib UI
  static config = THEME_CONFIG;

  constructor() {
    console.log('--- AuthService Replica nx-barrel-demo Inicializado ---');
    console.log('Cor primária do tema:', THEME_CONFIG.primaryColor);
  }
}



