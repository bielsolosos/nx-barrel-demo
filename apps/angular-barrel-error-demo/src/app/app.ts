import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { THEME_CONFIG } from '@demo/shared-ui'; // IMPORTAÇÃO GRANULAR FIX!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex h-screen w-screen bg-biel-black text-biel-text overflow-hidden font-sans"
    >
      <!-- Sidebar -->
      <aside
        class="w-64 bg-biel-black border-r border-biel-border flex flex-col p-6 shrink-0"
      >
        <div class="flex items-center space-x-3 mb-10">
          <div
            class="w-8 h-8 bg-biel-magenta rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(217,70,239,0.5)]"
          >
            <span class="text-white font-bold text-xl">B</span>
          </div>
          <h1 class="text-xl font-bold tracking-tight">BielQuest</h1>
        </div>

        <nav class="space-y-2 flex-1">
          <div
            class="flex items-center space-x-3 p-3 bg-biel-panel/50 text-biel-magenta rounded-xl cursor-pointer"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span class="font-medium text-sm">Hoje</span>
          </div>
          <div
            class="flex items-center space-x-3 p-3 text-biel-dim hover:text-biel-text transition-colors cursor-pointer"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span class="font-medium text-sm">Histórico</span>
          </div>
          <div
            class="flex items-center space-x-3 p-3 text-biel-dim hover:text-biel-text transition-colors cursor-pointer"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span class="font-medium text-sm">Gerenciar</span>
          </div>
        </nav>

        <div
          class="p-4 bg-biel-panel rounded-2xl border border-biel-border mt-auto"
        >
          <div
            class="text-[9px] text-biel-dim uppercase mb-1 tracking-widest font-bold"
          >
            Status do Tema
          </div>
          <div class="text-xs font-bold text-biel-magenta truncate">
            {{ config.appName }} {{ config.version }}
          </div>
          <div class="text-[10px] opacity-40 mt-1">By {{ config.author }}</div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-12 overflow-y-auto relative">
        <header class="flex justify-between items-start mb-12">
          <div>
            <h2 class="text-4xl font-bold mb-3 tracking-tight">
              Bem-vindo, bielsolosos
            </h2>
            <p class="text-biel-dim text-base">
              Check-in diário conectado ao backend.
            </p>
          </div>
          <div class="flex space-x-6">
            <div
              class="bg-biel-panel p-5 rounded-2xl border border-biel-border min-w-[180px] shadow-lg"
            >
              <div
                class="text-[10px] text-biel-dim uppercase mb-2 font-bold tracking-widest flex items-center"
              >
                <span
                  class="w-1.5 h-1.5 bg-biel-magenta rounded-full mr-2"
                ></span>
                Maior streak
              </div>
              <div class="text-3xl font-bold italic">1 dias</div>
              <div class="text-[10px] opacity-40 mt-1 uppercase">
                Meta: Ler ensinamento
              </div>
            </div>
            <div
              class="bg-biel-panel p-5 rounded-2xl border border-biel-border min-w-[180px] shadow-lg"
            >
              <div
                class="text-[10px] text-biel-dim uppercase mb-2 font-bold tracking-widest flex items-center"
              >
                <span
                  class="w-1.5 h-1.5 bg-biel-magenta rounded-full mr-2"
                ></span>
                Check-ins hoje
              </div>
              <div class="text-3xl font-bold italic">1 de 1</div>
            </div>
          </div>
        </header>

        <section>
          <div class="flex justify-between items-center mb-8">
            <h3 class="text-2xl font-bold">Seus objetivos de hoje</h3>
            <span
              class="text-[11px] text-biel-dim uppercase font-bold tracking-widest"
              >Toque para marcar</span
            >
          </div>

          <div class="grid grid-cols-1 gap-6">
            <!-- Task Card -->
            <div
              class="bg-biel-panel border border-biel-border p-8 rounded-[2.5rem] relative hover:border-biel-magenta/40 transition-all cursor-pointer group shadow-xl"
            >
              <div
                class="bg-biel-magenta/10 text-biel-magenta px-3 py-1 rounded-lg text-[10px] font-bold uppercase inline-block mb-4 tracking-widest"
              >
                Igreja
              </div>
              <h4
                class="text-xl font-bold mb-2 group-hover:text-biel-magenta transition-colors"
              >
                Ler ensinamento do dia
              </h4>
              <p class="text-biel-dim text-sm max-w-md">
                Chega via email enquanto o fatia rápida estiver rodando
              </p>
              <div
                class="absolute right-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-biel-magenta/30 flex items-center justify-center transition-all group-hover:border-biel-magenta group-hover:scale-110"
              >
                <div
                  class="w-4 h-4 bg-biel-magenta rounded-full shadow-[0_0_10px_rgba(217,70,239,0.6)]"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <!-- AVISO DE ERRO (Só aparece se o bootstrap falhar e eu conseguir injetar via script, ou se for hardcoded) -->
        <!-- No caso real, a tela fica branca. Vou deixar aqui o aviso para o usuário entender o que aconteceu no console. -->
      </main>
    </div>
  `,
})
export class App {
  config = THEME_CONFIG;

  constructor() {
    console.log('--- App BielQuest Iniciado ---');
    console.log('Configuração carregada:', this.config);
  }
}
