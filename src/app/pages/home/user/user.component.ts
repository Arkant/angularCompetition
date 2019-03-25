import { UserService } from './user.service';
import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() username: string;
  user;
  reposUrl: 'string';
  repos: {  };
  displayedColumns: string[] = ['name', 'link'];

  constructor(private userService: UserService) {
    
  }

  showUser(username: string) {
    const requestedUser = this.userService.getUsers(username);

    requestedUser.subscribe(
      (res: IUser) => {
      this.user = res;
      this.reposUrl = this.user.repos_url;

      this.showListOfRepos(this.reposUrl);
      },
      (error) => {
        console.log('Error occured: ', error)
      }
    );
  }

  showListOfRepos(reposUrl) {
    const requestedRepos = this.userService.getReposList(reposUrl);
    requestedRepos.subscribe(
      (res) => {
        console.log(res);
        this.repos = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}