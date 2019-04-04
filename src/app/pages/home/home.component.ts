import { SharingService } from './../../shared/sharing.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() username: string;
  constructor (private router : Router, private sharingService: SharingService) {

  }
  btnClick () {
    if( this.username ) {
      this.sharingService.setData(this.username);
      this.router.navigate(['/user']);
    } else {
      alert("Please fill the input");
    }
  };
}