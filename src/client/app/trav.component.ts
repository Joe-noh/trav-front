import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {TrNavigationComponent} from './tr-navigation';

@Component({
  moduleId: __moduleName,
  selector: 'trav-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'trav.component.html',
  styleUrls: ['trav.component.css'],
  directives: [ROUTER_DIRECTIVES, TrNavigationComponent],
  pipes: []
})
@RouteConfig([
])
export class TravApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
