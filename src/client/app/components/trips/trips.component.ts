import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Subscription} from 'rxjs/Subscription';

import {ApiService} from '../../services/api';
import {TripService} from '../../services/trip';
import {TripComponent} from '../trip/trip.component';

@Component({
  selector: 'trips',
  templateUrl: 'app/components/trips/trips.component.html',
  styleUrls: ['app/components/trips/trips.component.css'],
  directives: [ROUTER_DIRECTIVES, TripComponent]
})
export class TripsComponent implements OnInit {
  private trips;
  private subscription: Subscription;

  constructor(private tripService: TripService) {
    this.subscription = this.tripService.trips.subscribe(trips => this.trips = trips);
  }

  ngOnInit() {
    this.tripService.index();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
