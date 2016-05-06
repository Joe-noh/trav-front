import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {environment as env} from '../../environment';

import {AuthService} from '../auth';

@Injectable()
export class ApiService {
  constructor(private http: Http, private auth: AuthService) {}

  getRequest(path: string) {
    return this.http.get(this.backendUrl(path), this.options()).map(res => res.json()).share();
  }

  postRequest(path: string, params: Object) {
    return this.http.post(this.backendUrl(path), JSON.stringify(params), this.options()).map(res => res.json()).share();
  }

  options(): RequestOptions {
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
