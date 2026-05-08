import { __decorate } from "tslib";
import { Component } from '@angular/core';
// import { AuthService } from '@demo/shared-utils';
let App = class App {
    // authService!: AuthService;
    constructor() {
        // console.log('--- App instanciando AuthService ---');
        // try {
        //   this.authService = new AuthService();
        // } catch (e) {
        //   console.error('App capturou erro de inicialização:', e);
        // }
    }
    testService() {
        // if (this.authService) {
        //   this.authService.doSomething();
        // } else {
        //   console.warn('AuthService não foi inicializado corretamente devido ao erro de Barrel.');
        // }
    }
};
App = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        template: `
    <div class="flex flex-col h-screen w-screen bg-ide-bg text-ide-text font-sans overflow-hidden select-none">
      <!-- Top Navigation / IDE Header -->
      <header class="h-10 flex items-center justify-between px-4 bg-ide-panel border-b border-ide-border">
        <div class="flex items-center space-x-4">
          <div class="flex space-x-1.5">
            <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div class="text-[10px] font-medium opacity-60 uppercase tracking-widest px-4 border-l border-ide-border">NX Workspace: Angular-Barrel-Debug</div>
        </div>
        <div class="flex items-center space-x-6 text-[10px] font-semibold">
          <span class="text-ide-blue">feature/barrel-fix</span>
          <span class="opacity-40">v21.0.0</span>
        </div>
      </header>

      <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar / File Explorer -->
        <aside class="w-64 bg-ide-bg border-r border-ide-border flex-col hidden md:flex">
          <div class="p-3 text-[10px] font-bold text-ide-dim uppercase tracking-wider">Explorer</div>
          <div class="flex-1 overflow-hidden px-2 space-y-1">
            <div class="flex items-center py-1 px-2 text-ide-green bg-[#1F2937]/50 rounded cursor-pointer">
              <span class="mr-2 text-[10px]">▼</span>
              <span class="text-sm">libs / shared / utils</span>
            </div>
            <div class="pl-6 py-1 text-sm text-ide-text opacity-80 flex items-center hover:bg-white/5 rounded px-2 cursor-pointer transition-colors">
              <span class="mr-2 text-ide-blue font-bold text-[10px]">TS</span> user.model.ts
            </div>
            <div class="pl-6 py-1 text-sm text-ide-red font-semibold flex items-center bg-ide-red/10 rounded ring-1 ring-inset ring-ide-red/30 px-2 cursor-pointer">
              <span class="mr-2 text-ide-red font-bold text-[10px]">TS</span> index.ts (Barrel)
            </div>
            <div class="pl-6 py-1 text-sm text-ide-text opacity-80 flex items-center hover:bg-white/5 rounded px-2 cursor-pointer transition-colors">
              <span class="mr-2 text-ide-blue font-bold text-[10px]">TS</span> auth.service.ts
            </div>
          </div>
        </aside>

        <!-- Main Editor Area -->
        <main class="flex-1 flex flex-col relative bg-ide-bg">
          <div class="h-9 flex items-center bg-ide-panel border-b border-ide-border">
            <div class="px-4 py-2 text-xs border-r border-ide-border bg-ide-bg border-t-2 border-t-[#F78166] text-ide-text">index.ts</div>
            <div class="px-4 py-2 text-xs border-r border-ide-border opacity-40">auth.service.ts</div>
          </div>
          
          <div class="flex-1 p-6 font-mono text-sm leading-relaxed text-ide-purple overflow-auto">
             <div class="mt-8 p-4 bg-ide-panel/50 rounded border border-ide-border">
              <p class="text-ide-text text-sm mb-4 font-sans">Simulação de Erro Angular em Monorepo Nx (Barrels Cascata).</p>
              <button 
                (click)="testService()" 
                class="bg-ide-blue hover:bg-ide-blue/80 text-ide-bg font-bold px-4 py-2 rounded text-xs transition-all transform active:scale-95 font-sans"
              >
                EXECUTAR AUTH_SERVICE
              </button>
            </div>
          </div>

          <!-- ERROR OVERLAY: THE CRITICAL FAILURE -->
          <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center p-4 md:p-12 z-50">
            <div class="w-full max-w-2xl bg-ide-bg border-2 border-ide-red rounded-lg shadow-[0_0_50px_rgba(248,81,73,0.2)] overflow-hidden">
              <div class="bg-ide-red px-4 py-2 flex justify-between items-center">
                <span class="text-white font-bold text-[10px] uppercase tracking-tighter">Angular Runtime Error</span>
                <span class="text-white/80 text-[10px] font-mono">ReferenceError</span>
              </div>
              <div class="p-6">
                <div class="flex items-start space-x-5">
                  <div class="bg-ide-red p-2 rounded shadow-lg shrink-0">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  </div>
                  <div class="flex-1">
                    <h2 class="text-ide-red font-mono font-bold text-lg mb-3">Uncaught ReferenceError: Cannot access 'User' before initialization</h2>
                    <p class="text-ide-dim text-sm leading-relaxed mb-5 font-sans">
                      O erro ocorre devido à <strong>Circularidade via Barrel File</strong>. <br>
                      O AuthService tenta importar User de index.ts antes do index.ts terminar de carregar o AuthService.
                    </p>
                    <div class="bg-ide-panel p-4 rounded border border-ide-border text-[11px] font-mono text-ide-purple">
                      <div class="opacity-60">at new AuthService (auth.service.ts)</div>
                      <div class="font-bold underline text-ide-red py-1">at (index.ts -> auth.service.ts -> index.ts)</div>
                      <div class="opacity-40">at bootstrapApplication</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer class="h-6 flex items-center px-4 bg-ide-status text-[10px] text-ide-dim">
        <div class="flex items-center space-x-6">
          <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-ide-red mr-2 animate-pulse"></span> 1 Critical Error</span>
          <span class="text-ide-blue font-bold px-2 py-0.5 border border-ide-blue/30 rounded">NX: ANGULAR</span>
        </div>
      </footer>
    </div>
  `,
    })
], App);
export { App };
