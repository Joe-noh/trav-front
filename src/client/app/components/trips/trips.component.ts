import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {ApiService} from '../../services/api';
import {TripService} from '../../services/trip';
import {TripComponent} from './components/trip/trip.component';

@Component({
  moduleId: __moduleName,
  selector: 'trips',
  templateUrl: 'trips.component.html',
  styleUrls: ['trips.component.css'],
  directives: [ROUTER_DIRECTIVES, TripComponent],
  providers: [TripService]
})
export class TripsComponent implements OnInit {
  private trips;

  constructor(private tripService: TripService) {}

  ngOnInit() {
    this.tripService.trips.subscribe(trips => this.trips = trips);
    this.tripService.index();
  }
}
