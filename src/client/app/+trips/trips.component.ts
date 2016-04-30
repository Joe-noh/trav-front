import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'trips',
  templateUrl: 'trips.component.html',
  styleUrls: ['trips.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TripsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
