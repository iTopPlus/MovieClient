import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'movies_poppular',
        pathMatch: 'full'
    },
    {
        path: 'movies_poppular',
        loadChildren: './movies/movies.module#MoviesModule'
    },
];
