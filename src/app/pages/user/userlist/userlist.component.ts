import { SharingService } from './../../../shared/sharing.service';
import { Component } from '@angular/core';

@Component({
  selector: 'userlist-component',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent {
  reposUrl: 'string';
  repos: { };
  displayedColumns: string[] = ['name', 'link'];

  constructor(private sharingService: SharingService) {
    
  }

  ngOnInit(){
    this.repos = this.sharingService.getData();
    console.log(this.repos);
  }
}