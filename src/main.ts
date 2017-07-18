import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import "font-awesome-sass-loader";

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

  platformBrowserDynamic().bootstrapModule(AppModule);