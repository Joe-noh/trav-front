import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'navigation-comp',
  templateUrl: 'navigation-comp.component.html',
  styleUrls: ['navigation-comp.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavigationCompComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
