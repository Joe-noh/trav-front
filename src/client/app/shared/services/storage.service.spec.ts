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
import {StorageService} from './storage.service';

class MockWindow {}

describe('Storage Service', () => {

  beforeEachProviders(() => [
      StorageService,
      provide(Window, {useClass: MockWindow})
  ]);

  it('should ...', inject([StorageService], (service: StorageService) => {

  }));

});
