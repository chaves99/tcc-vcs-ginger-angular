import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LoginInput } from 'src/app/model/login-input';
import { GlobalVariable } from 'src/app/model/global';
import { UserRegisterReceived } from 'src/app/model/user-register';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { RoutePathKey } from 'src/app/model/route-path-key';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    loginUrl: string = GlobalVariable.BASE_API_URL + "/login";

    private loggedSubject = new BehaviorSubject(this.isLogged());
    public logginObservable = this.loggedSubject.asObservable();

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        private router: Router
    ) { }

    public login(input: LoginInput) {
        return this.http.post<UserRegisterReceived>( this.loginUrl, input, { headers: GlobalVariable.httpHeaders });
    }

    public isLogged(): boolean {
        let cookie = this.cookieService.get(GlobalVariable.GINGER_COOKIE_KEY);
        if (cookie != null && cookie.length > 0) { 
            return true;
        }
        return false;
    }

    public logout(): void {
        this.loggedSubject.next(false);
        this.cookieService.delete(GlobalVariable.GINGER_COOKIE_KEY);
        this.router.navigate([RoutePathKey.PATH_HOME]);
    }

    public setLoginTrue() {
        this.loggedSubject.next(true);
    }

    public getLoggedUser(): UserRegisterReceived | null {
        let cookie = this.cookieService.get(GlobalVariable.GINGER_COOKIE_KEY);
        if (cookie != null && cookie.length > 0) {
            let userReturned: UserRegisterReceived = JSON.parse(cookie);
            return userReturned;
        }
        return null;
    }
}
