/// <reference path="../../node_modules/@angular/common/index.d.ts" />
/// <reference path="../../node_modules/@angular/compiler/index.d.ts" />
/// <reference path="../../node_modules/@angular/core/index.d.ts" />
/// <reference path="../../node_modules/@angular/platform-browser-dynamic/index.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {enableProdMode, provide} from 'angular2/core';
import {environment} from './app/environment';

import {StorageService} from './app/services/storage';
import {AuthService} from './app/services/auth';
import {ApiService} from './app/services/api';
import {TripService} from './app/services/trip';

import {TravApp} from './app/components/main';

if (environment.production) {
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
