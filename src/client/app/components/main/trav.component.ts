import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {NavigationComponent} from '../navigation';
import {SigninComponent} from '../signin';
import {TripsComponent} from '../trips';
import {TripDetailComponent} from '../trip-detail';

import {AuthRouterOutlet} from '../../directives/auth-router-outlet';

@Component({
  selector: 'trav-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/components/main/trav.component.html',
  styleUrls: ['app/components/main/trav.component.css'],
  directives: [NavigationComponent, AuthRouterOutlet],
  pipes: []
})
@RouteConfig([
  {path: '/',       name: 'Trips',  component: TripsComponent, useAsDefault: true},
  {path: '/signin', name: 'Signin', component: SigninComponent},
  {path: '/trips/:id', name: 'TripDetail', component: TripDetailComponent}
])
export class TravApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
