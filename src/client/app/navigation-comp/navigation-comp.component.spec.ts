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
import {NavigationCompComponent} from './navigation-comp.component';

describe('NavigationComp Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(NavigationCompComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
