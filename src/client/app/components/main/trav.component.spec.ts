import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {TravApp} from './trav.component';

beforeEachProviders(() => [TravApp]);

describe('App: Trav', () => {
  it('should have the `defaultMeaning` as 42', inject([TravApp], (app: TravApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([TravApp], (app: TravApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});
