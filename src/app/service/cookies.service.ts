// import { Injectable } from '@angular/core';

// @Injectable()
// export class CookieService {

//     constructor() {}

//     public setCookie(key, value, exdays) {
//         console.log('key', key);
//         var d = new Date();
//         d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//         var expires = "expires=" + d.toUTCString();
//         document.cookie = key + "=" + value + ";" + expires + ";path=/";
//     }

//     public getCookie(cname) {
//         var name = cname + "=";
//         var decodedCookie = decodeURIComponent(document.cookie);
//         var ca = decodedCookie.split(';');
//         for (var i = 0; i < ca.length; i++) {
//             var c = ca[i];
//             while (c.charAt(0) == ' ') {
//                 c = c.substring(1);
//             }
//             if (c.indexOf(name) == 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }
//         return "";
//     }

//     public deleteCookie(name) {
//         console.log('NAME:',name);
//         document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
//         // self.location.href = "/"
//     };
// }
