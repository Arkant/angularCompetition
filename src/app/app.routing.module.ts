import { IsAllowedUser } from './core/guards/is-allowed.user.guard';
import { UserListComponent } from './pages/user/userlist/userlist.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {
    path: 'user/:list', 
    component: UserListComponent,
    canActivate: [IsAllowedUser]
  },
  {path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[IsAllowedUser]
})

export class AppRoutingModule { }