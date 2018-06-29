// import { Injectable } from '@angular/core';
// import {
//     HttpRequest,
//     HttpHandler,
//     HttpEvent,
//     HttpHeaders,
//     HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { CookieService } from './service/cookies.service';
// export class AccessToken {
//     accesstoken: string
//     ['Content-Type']: string = 'application/json'
// }

// @Injectable()
// export class AppInterceptor implements HttpInterceptor {
//     private accessToken: AccessToken;
//     constructor(private cookie: CookieService) {
//         this.accessToken = new AccessToken();
//     }
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         this.cookie.getCookie('token')
//         let headerObj = JSON.parse(JSON.stringify(this.accessToken));
//         const headers = new HttpHeaders(headerObj);
//         const setRequest = request.clone({ headers });
//         return next.handle(setRequest);
//     }
// }