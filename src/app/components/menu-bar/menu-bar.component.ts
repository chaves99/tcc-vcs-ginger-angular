import { Component, OnInit } from '@angular/core';
import { RoutePathKey } from 'src/app/model/route-path-key';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

    paths = RoutePathKey;

    isLogged: boolean = false;

    readonly profileAdminPath: string = RoutePathKey.PATH_ADMIN + "/" + RoutePathKey.PATH_ADMIN_PROFILE;
    readonly projectAdminPath: string = RoutePathKey.PATH_ADMIN + "/" + RoutePathKey.PATH_ADMIN_PROJECT;

    constructor(
        private loginService: LoginService
    ) { }

    ngOnInit(): void {
        this.isLogged = this.loginService.isLogged();
        this.loginService.logginObservable.subscribe(isLogged => this.isLogged = isLogged);
        console.log("MenuBarComponent - isLogged " + this.isLogged);
    }

    logout(): void {
        this.loginService.logout();
        this.isLogged = false;
    }

    getPathHome(): string {
        return this.isLogged ? this.paths.PATH_ADMIN : this.paths.PATH_HOME;
    }

}
