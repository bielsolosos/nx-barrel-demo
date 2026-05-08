import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { App } from './app/app';
import { appConfig } from './app/app.config';

console.log('--- Bootstrap iniciado ---');
const bootstrapPromise = bootstrapApplication(App, appConfig).catch(err => {
  console.error('--- ERRO NO BOOTSTRAP DO ANGULAR ---');
  console.error(err);
});
(window as { __appBootstrap?: Promise<unknown> }).__appBootstrap = bootstrapPromise;
