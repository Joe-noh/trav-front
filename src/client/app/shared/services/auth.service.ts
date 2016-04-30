import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import {environment as env} from '../../environment';

import {StorageService} from './storage.service';

@Injectable()
export class AuthService {
  constructor(private http: Http, private storage: StorageService) {}

  fetchSigninUrl() {
    return this.http.get(`${env.backendUrl}/api/auth/twitter`, this.defaultOptions()).map(res => res.json());
  }

  fetchAuthToken(token: string, verifier: string) {
    let url = `${env.backendUrl}/api/auth/twitter/signin`;
    let params = JSON.stringify({
      oauth_token:    token,
      oauth_verifier: verifier
    });

    return this.http.post(url, params, this.defaultOptions()).map(res => res.json());
  }

  storeToken(token: string) {
    this.storage.put("authToken", token);
  }

  getToken(): string {
    return this.storage.get("authToken");
  }

  defaultOptions() {
    return new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    });
  }
}
