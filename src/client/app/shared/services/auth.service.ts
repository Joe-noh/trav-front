import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import {environment as env} from '../../environment';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

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

  defaultOptions() {
    return new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    });
  }
}
