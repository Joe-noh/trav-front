import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TripsRouteComponent} from './+trips-route';
import {SigninComponent} from './signin';

import {NavigationCompComponent} from './navigation-comp';

@Component({
  moduleId: __moduleName,
  selector: 'trav-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'trav.component.html',
  styleUrls: ['trav.component.css'],
  directives: [ROUTER_DIRECTIVES, NavigationCompComponent],
  pipes: []
})
@RouteConfig([
  {path: '/signin', name: 'Signin',   component: SigninComponent, useAsDefault: true},
  {path: '/trips',  name: 'TripsRoute', component: TripsRouteComponent}
])
export class TravApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
