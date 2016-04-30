import {
  beforeEachProviders,
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {StorageService} from './storage.service';

describe('Storage Service', () => {

  beforeEachProviders(() => [StorageService]);

  it('should ...', inject([StorageService], (service: StorageService) => {

  }));

});
