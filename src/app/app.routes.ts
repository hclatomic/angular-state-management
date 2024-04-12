// Angular
import { Routes } from '@angular/router';
import { mapToCanActivate } from '@angular/router';
// app
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './services/auth.service';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
        //loadChildren: () => import('./pages/catalog/catalog.module').then(m => m.CatalogModule)
    },
    {
        path: 'catalog',
        canActivate: mapToCanActivate([AdminGuard]),
        loadChildren: () => import('./pages/catalog/catalog.module').then(m => m.CatalogModule)
    },
    {
        path: 'profile',
        canActivate: mapToCanActivate([AdminGuard]),
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: '**',
        component: LoginComponent
    },


];
