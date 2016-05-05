import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {enableProdMode, provide} from 'angular2/core';
import {environment} from './app/environment';

import {StorageService} from './app/services/storage';
import {AuthService} from './app/services/auth';

import {TravApp} from './app/components/main';

if (environment.production) {
  enableProdMode();
}

bootstrap(TravApp, [
  HTTP_PROVIDERS,
  StorageService,
  AuthService,
  provide(Window, {useValue: window})
]);
