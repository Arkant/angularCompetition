import { SharingService } from './../../shared/sharing.service';
import { UserService } from './user.service';
import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  user: IUser;
  username: string;
  reposUrl: string;
  requestedRepos: Observable<object>;
  requestedUser: Observable<object>;

  constructor(private userService: UserService, private sharingService: SharingService,
    private router: Router) {
  }

  ngOnInit(){
    this.username = this.sharingService.getData();
    this.showUser(this.username);
  }

  showUser(username: string) {
    this.requestedUser = this.userService.getUsers(username);
    if (!this.requestedUser) {
      this.router.navigate(['home']);
    }
    this.requestedUser.subscribe(
      (res: IUser) => {
        this.user = res;
        this.reposUrl = this.user.repos_url;
      },
      (error) => {
        console.log('Error occured: ', error)
      }
    );
  }

  getListOfRepos() {
    this.requestedRepos = this.userService.getReposList(this.reposUrl);
    this.requestedRepos.subscribe(
      (res: object) => {
        this.sharingService.setData(res);
        this.router.navigate([`/user/list`]);
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