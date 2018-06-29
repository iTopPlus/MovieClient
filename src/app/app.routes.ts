import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'movies_poppular',
        pathMatch: 'full'
    },
    {
        path: 'movies_poppular',
        component: WelcomeComponent
    },
    {
        path: 'movies_details',
        loadChildren: './movies/movies.module#MoviesModule'
    }
];
