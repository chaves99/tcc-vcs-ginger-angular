import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RoutePathKey } from "src/app/model/route-path-key";
import { UserRegisterReceived, UserRegisterSend, UserType } from "src/app/model/user-register";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: 'user-register',
    templateUrl: './user-register.component.html'
})
export class UserRegisterComponent {

    model: UserRegisterSend = { name: "", lastName:"", email: "", password: "", username: "", userType: undefined };

    readonly userTypeOption = Object.values(UserType);

    confirmPassword: string = "";

    hiddenError: boolean = true;
    errorMessage: string = '';

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    register(): void {
        if (this.validate()) {
            this.userService.create(this.model)
                .subscribe((data: UserRegisterReceived) => {
                    this.router.navigateByUrl(RoutePathKey.PATH_LOGIN);
                });
        }
    }

    validate(): boolean {
        if (this.model.email === null || this.model.email.length === 0) {
            this.showError("Email is null or empty!");
            return false;
        } else if (this.model.password != this.confirmPassword) {
            this.showError("Password is incompatible!");
            return false;
        } else if (this.model.username === null || this.model.username === "") {
            this.showError("Username can't be empty!");
            return false;
        } else if (this.model.userType == null || this.model.userType == undefined) {
            this.showError("Type of user is required!");
            return false;
        }
        return true;
    }

    showError(msg: string): void {
        this.errorMessage = msg;
        this.hiddenError = false;
    }
}