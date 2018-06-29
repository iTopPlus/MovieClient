import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable()
export class GetDetailService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private httpClient: HttpClient) { }

    public getVideoMovie(movie_id: number): Observable<any> {
        return this.httpClient
            .post<any>('http://localhost:7777/getVideo', { movie_id: movie_id }, this.httpOptions)
            .pipe(catchError((err: HttpErrorResponse) => observableThrowError(err.statusText)));
    }

    public getReviewMovie(movie_id: number): Observable<any> {
        return this.httpClient
            .post<any>('http://localhost:7777/getReview', { movie_id: movie_id }, this.httpOptions)
            .pipe(catchError((err: HttpErrorResponse) => observableThrowError(err.statusText)));
    }

    public getDetailMovie(movie_id: number): Observable<any> {
        return this.httpClient
            .post<any>('http://localhost:7777/getDetail', { movie_id: movie_id }, this.httpOptions)
            .pipe(catchError((err: HttpErrorResponse) => observableThrowError(err.statusText)));
    }
}
