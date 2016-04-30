import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {TripsComponent} from './+trips';
import {SigninComponent} from './signin';

import {NavigationComponent} from './shared';

@Component({
  moduleId: __moduleName,
  selector: 'trav-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'trav.component.html',
  styleUrls: ['trav.component.css'],
  directives: [ROUTER_DIRECTIVES, NavigationComponent],
  pipes: []
})
@RouteConfig([
  {path: '/',       name: 'Trips',  component: TripsComponent, useAsDefault: true},
  {path: '/signin', name: 'Signin', component: SigninComponent},
])
export class TravApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
