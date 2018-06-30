import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable()
export class GetPoppularMovieService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }

    public getPoppularMovies(page: number): Observable<any> {
        return this.httpClient
            .post<any>(environment.path + '/getPoppular', { page: page }, this.httpOptions)
            .pipe(catchError((err: HttpErrorResponse) => observableThrowError(err.statusText)));
    }
}
