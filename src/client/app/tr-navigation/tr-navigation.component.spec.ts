import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {TrNavigationComponent} from './tr-navigation.component';

describe('TrNavigation Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(TrNavigationComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
