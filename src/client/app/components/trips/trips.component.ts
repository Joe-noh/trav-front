import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {ApiService} from '../../services/api';
import {TripComponent} from './components/trip/trip.component';

@Component({
  moduleId: __moduleName,
  selector: 'trips',
  templateUrl: 'trips.component.html',
  styleUrls: ['trips.component.css'],
  directives: [ROUTER_DIRECTIVES, TripComponent],
  providers: [ApiService]
})
export class TripsComponent implements OnInit {
  private trips;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getRequest('/api/trips').subscribe(data => {
      this.trips = data.trips;
    });
  }

}
