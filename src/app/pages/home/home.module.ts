import { HomeComponent } from './home.component';
import { UserComponent } from './../user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [HomeComponent, UserComponent],
  providers: [],
})
export class HomeModule { }
