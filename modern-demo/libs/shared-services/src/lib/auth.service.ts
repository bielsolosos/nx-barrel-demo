import { Injectable } from '@angular/core';
import { THEME_CONFIG } from '@demo/shared-ui';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Acesso estático que disparará o erro durante a inicialização do módulo
  static theme = THEME_CONFIG.primaryColor;

  constructor() {
    console.log(
      'AuthService inicializado com tema:',
      THEME_CONFIG.primaryColor,
    );
  }
}
