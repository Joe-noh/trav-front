import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouteParams, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {AuthService} from '../shared';

@Component({
  moduleId: __moduleName,
  selector: 'top-route',
  templateUrl: 'top-route.component.html',
  styleUrls: ['top-route.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthService]
})
export class TopRouteComponent implements OnInit {

  constructor(private params: RouteParams, private router: Router, private auth: AuthService) {}

  ngOnInit() {
    let token    = this.params.get("oauth_token");
    let verifier = this.params.get("oauth_verifier");

    if (token && verifier) {
      this.auth.fetchAuthToken(token, verifier).subscribe(data => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['TrTrips']);
      });
    }
  }

  signInWithTwitter() {
    this.auth.fetchSigninUrl().subscribe(data => {
      window.location.href = data.url;
    })
  }
}
