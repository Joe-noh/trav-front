import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {
  NavigationComponent,
  SigninComponent,
  TripsComponent,
  TripDetailComponent} from './components';

import {AuthRouterOutlet} from './directives';

@Component({
  selector: 'trav-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/trav.component.html',
  styleUrls: ['app/trav.component.css'],
  directives: [NavigationComponent, AuthRouterOutlet],
  pipes: []
})
@RouteConfig([
  {path: '/',          name: 'Trips',  component: TripsComponent, useAsDefault: true},
  {path: '/signin',    name: 'Signin', component: SigninComponent},
  {path: '/trips/:id', name: 'TripDetail', component: TripDetailComponent}
])
export class TravApp {}
