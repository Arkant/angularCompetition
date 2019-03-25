import { UserComponent } from './user/user.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { UserService } from './user/user.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule
  ],
  exports: [HomeComponent, UserComponent],
  providers: [UserService],
})
export class HomeModule { }
