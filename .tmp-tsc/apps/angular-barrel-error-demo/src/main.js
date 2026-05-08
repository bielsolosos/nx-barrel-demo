import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { App } from './app/app';
import { appConfig } from './app/app.config';
const bootstrapPromise = bootstrapApplication(App, appConfig).catch(err => console.error(err));
window.__appBootstrap = bootstrapPromise;
