
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, provideRouter } from '@angular/router';
// app
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: '**',
    component: ProfileComponent
  },

];
@NgModule({
  declarations: [],
  providers: [provideRouter(routes)],
  imports: [
    CommonModule,
    ProfileComponent
  ]
})
export class ProfileModule { }








/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileComponent
  ]
})
export class ProfileModule { }*/
