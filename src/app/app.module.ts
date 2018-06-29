import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './containers/home';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MoviesModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
