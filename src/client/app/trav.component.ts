import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TripsRouteComponent} from './+trips-route';
import {TopRouteComponent} from './top-route';

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
  {path: '/',      name: 'TopRoute', component: TopRouteComponent, useAsDefault: true},
  {path: '/trips', name: 'TripsRoute',  component: TripsRouteComponent}
])
export class TravApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
