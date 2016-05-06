import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {TripService} from '../../services/trip';
import {Trip} from '../../lib/trip';

@Component({
  moduleId: __moduleName,
  selector: 'trip-detail',
  templateUrl: 'trip-detail.component.html',
  styleUrls: ['trip-detail.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [TripService]
})
export class TripDetailComponent implements OnInit {
  private trip;
  private tripId: number;

  constructor(private params: RouteParams, private tripService: TripService) {
    this.tripId = parseInt(this.params.get('id'));
  }

  ngOnInit() {
    this.tripService.trips.subscribe(trips => {
      this.trip = trips.find(trip => trip.id === this.tripId);
    });
    this.tripService.load(this.tripId);
  }
}
