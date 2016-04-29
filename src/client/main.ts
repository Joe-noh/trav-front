import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {TravApp} from './app/trav.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(TravApp);
