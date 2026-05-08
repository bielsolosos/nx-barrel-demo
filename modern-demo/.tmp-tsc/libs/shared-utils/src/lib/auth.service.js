// IMPORTAÇÃO CASCATA / CIRCULAR PELO BARREL
import { User } from '../index';
export class AuthService {
    constructor() {
        console.log('--- AuthService constructor iniciado ---');
        // O erro real de Barrel acontece aqui: User é acessado antes de ser definido no fluxo do index.ts
        console.log('Formato de usuário:', User.format);
    }
    doSomething() {
        console.log('AuthService funcional.');
    }
}
