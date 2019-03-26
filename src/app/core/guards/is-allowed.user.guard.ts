import { UserService } from './../../pages/user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class IsAllowedUser implements CanActivate {
  constructor (private userService: UserService) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.username === localStorage.getItem(`${this.userService.username}`)) {
      return false;
    }
    return true;
  }

}