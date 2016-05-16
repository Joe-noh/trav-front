/// <reference path="../../node_modules/@angular/common/index.d.ts" />
/// <reference path="../../node_modules/@angular/compiler/index.d.ts" />
/// <reference path="../../node_modules/@angular/core/index.d.ts" />
/// <reference path="../../node_modules/@angular/platform-browser-dynamic/index.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {enableProdMode, provide} from '@angular/core';
import env from './app/environment';

import {StorageService, AuthService, ApiService, TripService} from './app/services';

import {TravApp} from './app/trav.component';

if (env.production) {
  enableProdMode();
}

bootstrap(TravApp, [
  HTTP_PROVIDERS,
  StorageService,
  AuthService,
  ApiService,
  TripService,
  provide(Window, {useValue: window})
]);
