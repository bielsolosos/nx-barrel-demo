// IMPORTAÇÃO CIRCULAR VIA BARREL PARA REPRODUZIR ReferenceError
import { AuthService } from "../index";
export class User {
    // Acesso precoce a AuthService durante a inicialização do módulo
    static { this.format = `JSON_ENHANCED:${AuthService.name}`; }
    constructor(name) {
        this.name = name;
    }
}
