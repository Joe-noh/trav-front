import {
  beforeEachProviders,
  beforeEach,
  it,
  describe,
  expect,
  inject,
} from 'angular2/testing';

import {provide} from 'angular2/core';
import {AuthService} from './auth.service';
import {StorageService} from './storage.service';
import {Http, HTTP_PROVIDERS, Response, ResponseOptions} from 'angular2/http';
import {Observable} from "rxjs/Rx";

class MockStorage {}

let service, http;

describe('Auth Service', () => {

  beforeEachProviders(() => [
    AuthService,
    HTTP_PROVIDERS,
    provide(StorageService, {useClass: MockStorage})
  ]);

  beforeEach(inject([AuthService, Http], (_service, _http) => {
    service = _service;
  }));

  describe('fetchSigninUrl()', () => {
    let url = "https://twitter.com/oauth";

    beforeEach(inject([Http], (_http) => {
      http = _http;

      spyOn(http, 'get').and.returnValue(Observable.from([
        new Response(new ResponseOptions({body: {url}}))
      ]));
    }));

    it('returns twitter signin url', () => {
      service.fetchSigninUrl().subscribe(data => {
        expect(data).toEqual({url});
      });
    });
  });

  describe('fetchAuthToken()', () => {
    let token = "hogehogefugafuga";

    beforeEach(inject([Http], (_http) => {
      http = _http;

      spyOn(http, 'post').and.returnValue(Observable.from([
        new Response(new ResponseOptions({body: {token}}))
      ]));
    }));

    it('returns JWT for auth', () => {
      service.fetchAuthToken().subscribe(data => {
        expect(data).toEqual({token});
      });
    });
  });
});
