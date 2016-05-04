import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {enableProdMode, provide} from 'angular2/core';
import {environment} from './app/environment';

import {StorageService, AuthService} from './app/shared'

import {TravApp} from './app/trav.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(TravApp, [
  HTTP_PROVIDERS,
  StorageService,
  AuthService,
  provide(Window, {useValue: window})
]);
