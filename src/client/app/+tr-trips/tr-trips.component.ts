import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'tr-trips',
  templateUrl: 'tr-trips.component.html',
  styleUrls: ['tr-trips.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TrTripsComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}
