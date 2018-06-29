import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatProgressBarModule } from '@angular/material';


// Container
import { HomeComponent } from './container/home/home.component'
import { GetPoppularComponent, GetPoppularMovieService } from './get-poppular';
import { GetDetailComponent } from './get-detail/get-detail.component'

import { route } from './movies.routes';


const COMPONENT = [
    HomeComponent,
    GetDetailComponent,
    GetPoppularComponent
];
const SERVICE = [
    GetPoppularMovieService
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(route)
    ],
    declarations: COMPONENT,
    providers: SERVICE
})
export class MoviesModule { }
