import {Component, OnInit, Input, Attribute} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Trip} from '../trip';

@Component({
  moduleId: __moduleName,
  selector: 'show-trip',
  inputs: ['trip'],
  templateUrl: 'show-trip.component.html',
  styleUrls: ['show-trip.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class ShowTripComponent implements OnInit {
  @Input() trip: Trip;

  constructor() {}

  ngOnInit() {}

}
