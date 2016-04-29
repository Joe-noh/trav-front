import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'tr-navigation',
  templateUrl: 'tr-navigation.component.html',
  styleUrls: ['tr-navigation.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TrNavigationComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
