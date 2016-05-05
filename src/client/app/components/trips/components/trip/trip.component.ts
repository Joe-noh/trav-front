import {Component, OnInit, Input, Attribute} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

class Trip {
  id: number;
  user_id: number;
  title: string;
  map: any;
  plan: any;
}

@Component({
  moduleId: __moduleName,
  selector: 'trip',
  inputs: ['trip'],
  templateUrl: 'trip.component.html',
  styleUrls: ['trip.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class TripComponent implements OnInit {
  private path;
  @Input() trip: Trip;

  constructor() {}

  ngOnInit() {
    console.log(this.trip);
  }

}
