import {Component, OnInit, Input, Attribute} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Trip} from '../../../../lib/trip';

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

  ngOnInit() {}

}
