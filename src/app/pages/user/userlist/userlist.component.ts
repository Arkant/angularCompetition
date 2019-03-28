import { SharingService } from './../../../shared/sharing.service';
import { Component } from '@angular/core';
import { IList } from 'src/app/core/interfaces/list.interface';

@Component({
  selector: 'userlist-component',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent {
  repos: IList;
  displayedColumns: string[] = ['name', 'link'];

  constructor(private sharingService: SharingService) {    
  }

  ngOnInit(): void {
    if (this.sharingService.getData()){
      this.repos = this.sharingService.getData();
    }
  }
}