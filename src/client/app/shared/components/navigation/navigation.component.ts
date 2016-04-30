import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
