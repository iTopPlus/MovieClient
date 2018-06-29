// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { catchError, tap } from 'rxjs/operators';
// import { throwError as observableThrowError, Observable } from 'rxjs';

// import { CookieService } from '../service/cookies.service'

// @Injectable()
// export class MoviesResolve implements Resolve<Object> {

//     constructor(private httpClient: HttpClient, private cookie: CookieService) { }

//     resolve(): Observable<any> {
//         return this.httpClient
//             .post<any>('http://localhost:7777/accesstoken', { token: '' })
//             .pipe(
//                 catchError((err: HttpErrorResponse) => observableThrowError(err.statusText)),
//                 tap((token) => {
//                     this.cookie.setCookie('token', token, 30);
//                 })
//             );
//     }



// }