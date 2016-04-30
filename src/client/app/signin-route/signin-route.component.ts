import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouteParams, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {AuthService} from '../shared';

@Component({
  moduleId: __moduleName,
  selector: 'signin-route',
  templateUrl: 'signin-route.component.html',
  styleUrls: ['signin-route.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthService]
})
export class SigninRouteComponent implements OnInit {

  constructor(
    private params: RouteParams,
    private router: Router,
    private auth: AuthService,
    private window: Window) {}

  ngOnInit() {
    let token    = this.params.get("oauth_token");
    let verifier = this.params.get("oauth_verifier");

    if (token && verifier) {
      this.auth.fetchAuthToken(token, verifier).subscribe(data => {
        this.auth.storeToken(data.token);
        this.router.navigate(['TripsRoute']);
      });
    }
  }

  signInWithTwitter() {
    this.auth.fetchSigninUrl().subscribe(data => {
      this.window.location.href = data.url;
    })
  }
}
