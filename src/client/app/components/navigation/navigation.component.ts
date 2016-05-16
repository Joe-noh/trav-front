import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'navigation',
  templateUrl: 'app/components/navigation/navigation.component.html',
  styleUrls: ['app/components/navigation/navigation.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
