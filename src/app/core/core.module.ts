import { HomeModule } from './../pages/home/home.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    HomeModule
  ],
  declarations: [
  ],
  exports: [HomeModule]
})

export class CoreModule { }