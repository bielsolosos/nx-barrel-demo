import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { THEME_CONFIG, CardComponent } from '@nx-barrel-demo/shared-ui'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarModule, ButtonModule, CardModule, ToolbarModule, CardComponent],
  template: `
    <div class="min-h-screen flex flex-column bg-gray-900 font-sans">
      <!-- Toolbar/Header -->
      <p-toolbar styleClass="bg-gray-800 border-none border-bottom-1 border-gray-700 px-4 py-3 shadow-4">
        <div class="p-toolbar-group-start">
          <p-button (onClick)="sidebarVisible = true" icon="pi pi-bars" styleClass="p-button-text p-button-rounded text-white mr-3"></p-button>
          <div class="flex align-items-center gap-2">
            <i class="pi pi-shield text-primary text-2xl"></i>
            <span class="text-xl font-bold text-white tracking-tight">{{ config.appName }}</span>
          </div>
        </div>
        <div class="p-toolbar-group-end">
          <p-button icon="pi pi-user" styleClass="p-button-rounded p-button-text text-white"></p-button>
        </div>
      </p-toolbar>

      <div class="p-4 md:p-6 flex-grow-1">
        <!-- Hero Section -->
        <div class="surface-card p-5 shadow-2 border-round-xl mb-5 bg-gray-800 border-1 border-gray-700">
          <div class="flex align-items-center justify-content-between mb-3">
            <div>
              <span class="block text-gray-400 font-medium mb-2 uppercase text-xs tracking-widest">Dashboard Inicial</span>
              <div class="text-3xl font-bold text-white">Bem-vindo ao nx-barrel-demo</div>
            </div>
            <div class="flex align-items-center justify-content-center bg-primary-reverse border-round w-3rem h-3rem shadow-2">
              <i class="pi pi-chart-line text-white text-2xl"></i>
            </div>
          </div>
          <span class="text-gray-500 text-sm">Monitorando instâncias e dependências circulares em tempo real.</span>
        </div>

        <!-- Grid de Conteúdo -->
        <div class="grid">
          <!-- O GATILHO: Este componente vai disparar a avaliação da lib-ui -->
          <div class="col-12 md:col-6 lg:col-4">
             <lib-card 
               title="Análise de Dependência" 
               description="Tentando carregar o AuthService através do barrel da UI. Se você está vendo isso, o erro não disparou.">
             </lib-card>
          </div>

          <div class="col-12 md:col-6 lg:col-4">
            <div class="surface-card p-4 shadow-2 border-round-xl bg-gray-800 border-1 border-gray-700 hover:border-primary transition-all transition-duration-300">
              <div class="flex justify-content-between mb-3">
                <div>
                  <span class="block text-gray-400 font-medium mb-3 uppercase text-xs tracking-widest">Status do App</span>
                  <div class="text-white font-bold text-xl">Online</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-green-900 border-round w-2rem h-2rem">
                  <i class="pi pi-check-circle text-green-400 text-xl"></i>
                </div>
              </div>
              <span class="text-green-400 font-medium">v{{ config.version }} </span>
              <span class="text-gray-500 text-xs ml-1">Estável</span>
            </div>
          </div>

          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card p-4 shadow-2 border-round-xl bg-gray-800 border-1 border-gray-700 hover:border-orange-500 transition-all transition-duration-300">
              <div class="flex justify-content-between mb-3">
                <div>
                  <span class="block text-gray-400 font-medium mb-3 uppercase text-xs tracking-widest">Barrels Ativos</span>
                  <div class="text-white font-bold text-xl">124 Âncoras</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-orange-900 border-round w-2rem h-2rem">
                  <i class="pi pi-link text-orange-400 text-xl"></i>
                </div>
              </div>
              <span class="text-orange-400 font-medium">2 Críticos </span>
              <span class="text-gray-500 text-xs ml-1">Atenção</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <p-sidebar [(visible)]="sidebarVisible" styleClass="w-20rem bg-gray-800 border-none shadow-5 text-white">
        <ng-template pTemplate="header">
          <span class="font-bold text-xl tracking-tight">Menu Principal</span>
        </ng-template>
        <ul class="list-none p-0 m-0">
          <li class="p-3 hover:bg-gray-700 border-round cursor-pointer transition-colors flex align-items-center gap-3">
            <i class="pi pi-home"></i>
            <span>Início</span>
          </li>
          <li class="p-3 hover:bg-gray-700 border-round cursor-pointer transition-colors flex align-items-center gap-3">
            <i class="pi pi-box"></i>
            <span>Módulos</span>
          </li>
        </ul>
      </p-sidebar>
    </div>
  `
})
export class AppComponent {
  sidebarVisible = false;
  config = THEME_CONFIG;
}



