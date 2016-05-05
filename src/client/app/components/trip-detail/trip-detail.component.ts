import {Component, OnInit, Input, Attribute} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Trip} from '../../lib/trip';

@Component({
  moduleId: __moduleName,
  selector: 'show-trip',
  inputs: ['trip'],
  templateUrl: 'trip-detail.component.html',
  styleUrls: ['trip-detail.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class TripDetailComponent implements OnInit {
  @Input() trip: Trip;

  constructor() {}

  ngOnInit() {}

}
