// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, provideRouter } from '@angular/router';
// app
import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: '**',
    component: CatalogComponent
  },

];
@NgModule({
  declarations: [],
  providers: [provideRouter(routes), CatalogService],
  imports: [
    CommonModule,
    CatalogComponent,
  ]
})
export class CatalogModule { }
