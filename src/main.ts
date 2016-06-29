import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

// enableProdMode();

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);

