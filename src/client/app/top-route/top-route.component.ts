import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouteParams, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'top-route',
  templateUrl: 'top-route.component.html',
  styleUrls: ['top-route.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TopRouteComponent implements OnInit {

  constructor(private params: RouteParams, private router: Router) {}

  ngOnInit() {
    let token    = this.params.get("oauth_token");
    let verifier = this.params.get("oauth_verifier");

    if (token && verifier) {
      console.log("attempt login");
      this.router.navigate(['TrTrips']);
    }
  }

  signInWithTwitter() {
    window.location.href = "https://twitter.com";
  }
}
