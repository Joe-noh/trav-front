import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, ComponentInstruction} from '@angular/router-deprecated';

import {AuthService} from '../../services';

@Directive({
  selector: 'auth-router-outlet',
  providers: [AuthService]
})
export class AuthRouterOutlet extends RouterOutlet {
  publicRoutes: Array<string>;

  constructor(
    containerRef: ViewContainerRef,
    loader: DynamicComponentLoader,
    private parentRouter: Router,
    @Attribute('name') nameAttr: string,
    private authService: AuthService
  ) {
    super(containerRef, loader, parentRouter, nameAttr);

    this.publicRoutes = ['signin'];
  }

  activate(instruction: ComponentInstruction) {
    let path = this.parentRouter.currentInstruction.urlPath;
    if (this.publicRoutes.indexOf(path) !== -1 || this.authService.isLoggedIn()) {
      return super.activate(instruction);
    }

    this.parentRouter.navigate(['Signin']);
  }
}
