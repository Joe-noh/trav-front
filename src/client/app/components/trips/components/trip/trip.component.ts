import {Component, OnInit, Input, Attribute} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Trip} from '../../../../lib/trip';

@Component({

  selector: 'trip',
  inputs: ['trip'],
  templateUrl: 'app/components/trips/components/trip/trip.component.html',
  styleUrls: ['app/components/trips/components/trip/trip.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class TripComponent implements OnInit {
  private path;
  @Input() trip: Trip;

  constructor() {}

  ngOnInit() {}

}
