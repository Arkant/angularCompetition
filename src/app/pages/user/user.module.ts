import { MatTableModule } from '@angular/material/table';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { UserListComponent } from '../user/userlist/userlist.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
 

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    AppRoutingModule
  ],
  exports: [UserComponent, UserListComponent],
  providers: [UserService],
})
export class UserModule { }
