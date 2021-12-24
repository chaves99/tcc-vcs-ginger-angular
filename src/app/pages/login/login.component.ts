import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GlobalVariable } from 'src/app/model/global';
import { LoginInput } from 'src/app/model/login-input';
import { RoutePathKey } from 'src/app/model/route-path-key';
import { UserRegisterReceived } from 'src/app/model/user-register';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    paths = RoutePathKey;

    hiddenError: boolean = true;
    errorMessage?: string;

    model: LoginInput = { username: '', password: '' };

    constructor(
        private loginService: LoginService,
        private cookieService: CookieService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (this.loginService.isLogged()){
            this.router.navigate([RoutePathKey.PATH_ADMIN])
        }
    }

    login() {
        console.log("login");
        this.loginService.login(this.model)
        // .pipe((err) => {

        // })
        .subscribe(data => {
            console.log(data);
            this.processarLogin(data);
        },
        (err) => {
            this.hiddenError = false;
            this.errorMessage = 'Username/Email or password incorrect!';
            console.log(this.errorMessage);
        });
    }

    private processarLogin(user: UserRegisterReceived) {
        if (user != null) {
            this.cookieService.deleteAll();
            this.cookieService.set(GlobalVariable.GINGER_COOKIE_KEY, JSON.stringify(user));
            this.loginService.setLoginTrue();
            this.router.navigate([RoutePathKey.PATH_ADMIN]);
        }
    }

}
