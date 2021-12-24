import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { GlobalVariable } from 'src/app/model/global';
import { UserRegisterReceived } from 'src/app/model/user-register';
import { UserService } from 'src/app/services/user/user.service';
import { RoutePathKey } from 'src/app/model/route-path-key';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private cookieService: CookieService,
        private userService: UserService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let cookie: string = this.cookieService.get(GlobalVariable.GINGER_COOKIE_KEY);
        console.log("canActivate - cookie: " + cookie);
        if (cookie != null && cookie.length > 0) {
            let obj: UserRegisterReceived = JSON.parse(cookie);
            console.log("canActivate - state:" + state.toString());
            console.log("canActivate - user:" + obj.username);
            if (obj != null) {
                return true;
            }
        }
        this.router.navigate([RoutePathKey.PATH_LOGIN]);
        return false;
    }

}
