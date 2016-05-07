import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

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
