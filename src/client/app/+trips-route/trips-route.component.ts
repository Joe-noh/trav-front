import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'trips-route',
  templateUrl: 'trips-route.component.html',
  styleUrls: ['trips-route.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TripsRouteComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
