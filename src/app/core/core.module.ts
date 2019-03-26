import { HomeModule } from './../pages/home/home.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModule } from '../pages/user/user.module';
import { SharingService } from '../shared/sharing.service';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    UserModule,
  ],
  declarations: [
  ],
  exports: [HomeModule, UserModule],
  providers: [SharingService]
})

export class CoreModule { }