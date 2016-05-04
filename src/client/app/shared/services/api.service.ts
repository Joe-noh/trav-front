import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import {environment as env} from '../../environment';

import {AuthService} from './auth.service';

@Injectable()
export class ApiService {
  constructor(private http: Http, private auth: AuthService) {}

  getRequest(path: string) {
    return this.http.get(this.backendUrl(path), this.defaultOptions()).map(res => res.json());
  }

  postRequest(path: string, params: Object) {
    return this.http.post(this.backendUrl(path), JSON.stringify(params), this.defaultOptions()).map(res => res.json());
  }

  defaultOptions(): RequestOptions {
    return new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    });
  }

  backendUrl(path: string): string {
    return `${env.backendUrl}${path}`;
  }
}
