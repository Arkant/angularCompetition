import { SharingService } from './../../shared/sharing.service';
import { UserService } from './user.service';
import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user;
  errorMessage: string;
  username: string;
  reposUrl: 'string';
  repos: {  };

  constructor(private userService: UserService, private sharingService: SharingService,
    private router: Router) {
    
  }

  ngOnInit(){
    this.username = this.sharingService.getData();
    this.showUser(this.username);
  }

  showUser(username: string) {
    const requestedUser = this.userService.getUsers(username);

    requestedUser.subscribe(
      (res: IUser) => {
        this.user = res;
        this.reposUrl = this.user.repos_url;
      },
      (error) => {
        this.errorMessage = `User ${error.statusText}`;
        console.log('Error occured: ', error)
      }
    );
  }

  getListOfRepos() {
    const requestedRepos = this.userService.getReposList(this.reposUrl);
    requestedRepos.subscribe(
      (res) => {
        this.sharingService.setData(res);
        this.router.navigate(['user/:list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  banUser () {
    this.userService.saveToLocalStorage(this.username);
  }
}