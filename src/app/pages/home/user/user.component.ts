import { UserService } from './user.service';
import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent /*implements IUser*/ {

  @Input() username: string;
  // private users: IUser[] = [];
   
  constructor(private userService: UserService) {
    
  }
  showUser(username) {
    this.userService.getUsers(username);
  }
}