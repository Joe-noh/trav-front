import {Component, OnInit, OnDestroy} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {Subscription} from 'rxjs/Subscription';

import {TripService} from '../../services/trip';
import {Trip} from '../../lib/trip';

@Component({
  moduleId: __moduleName,
  selector: 'trip-detail',
  templateUrl: 'trip-detail.component.html',
  styleUrls: ['trip-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TripDetailComponent implements OnInit, OnDestroy {
  private trip;
  private tripId: number;
  private subscription: Subscription

  constructor(private params: RouteParams, private tripService: TripService) {
    this.tripId = parseInt(this.params.get('id'));
    this.subscription = this.tripService.trips.subscribe(trips => {
      this.trip = trips.find(trip => trip.id === this.tripId);
    });
  }

  ngOnInit() {
    this.tripService.load(this.tripId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
