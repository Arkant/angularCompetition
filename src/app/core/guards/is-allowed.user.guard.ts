import { UserService } from './../../pages/user/user.service';
import { Injectable } from '@angular/core';
import { CanActivateChild , ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class IsAllowedUser implements CanActivateChild {
  constructor (private userService: UserService) {

  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !localStorage[this.userService.username];
  }
}