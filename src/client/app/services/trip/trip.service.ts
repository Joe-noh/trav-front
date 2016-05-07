import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/observer';
import 'rxjs/add/operator/share';

import {ApiService} from '../api';
import {Trip} from '../../lib/trip';

@Injectable()
export class TripService {
  public trips: Observable<Trip[]>;
  private tripsObserver: Observer<Trip[]>;
  private store: {
    trips: Trip[];
  };

  constructor(private api: ApiService) {
    this.store = {trips: []};
    this.trips = new Observable<Trip[]>(obs => this.tripsObserver = obs).share();
  }

  index() {
    if (this.store.trips.length > 0) {
      this.tripsObserver.next(this.store.trips);
    } else {
      this.api.getRequest('/api/trips').subscribe(
        data => {
          this.store.trips = data.trips;
          this.tripsObserver.next(this.store.trips);
        },
        error => console.log('Could not load trips')
      );
    }
  }

  load(id: number) {
    if (this.store.trips.find(trip => trip.id === id)) {
      this.tripsObserver.next(this.store.trips);
    } else {
      this.api.getRequest(`/api/trips/${id}`).subscribe(
        data => {
          this.store.trips.push(data.trip);
          this.tripsObserver.next(this.store.trips);
        },
        error => console.log('Could not load the trip.')
      );
    }
  }
}
