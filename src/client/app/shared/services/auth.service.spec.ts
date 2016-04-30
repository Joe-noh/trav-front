import {
  beforeEachProviders,
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  async
} from 'angular2/testing';

import {provide} from 'angular2/core';
import {AuthService} from './auth.service';
import {StorageService} from './storage.service';
import {Http} from 'angular2/http';

class MockHttp {}

class MockStorage {}

describe('Auth Service', () => {

  beforeEachProviders(() => [
    AuthService,
    provide(Http, {useClass: MockHttp}),
    provide(StorageService, {useClass: MockStorage})
  ]);

  it('should ...', inject([AuthService], (service: AuthService) => {

  }));

});
