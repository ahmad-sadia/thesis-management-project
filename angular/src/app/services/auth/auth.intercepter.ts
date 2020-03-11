import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let headers = request.headers;
        const token = localStorage.getItem('token');
        if (token !== undefined) {
            headers = headers.set('Authorization', 'Bearer ' + token);
        }
        return next.handle(request.clone({
            headers
        }));
    }
}
