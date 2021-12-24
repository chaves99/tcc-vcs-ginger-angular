import { Component } from "@angular/core";
import { UserRegisterReceived, UserRegisterSend } from "src/app/model/user-register";
import { UserService } from "src/app/services/user/user.service";

@Component({
    selector: 'user-register',
    templateUrl: './user-register.component.html'
})
export class UserRegisterComponent {

    model: UserRegisterSend = { name: "", email: "", password: "", username: "" };

    constructor(
        private userService: UserService
    ) { }

    register() {
        console.log(this.model);
        this.userService.create(this.model).subscribe((data: UserRegisterReceived) => {
            console.log(data);
        });
    }
}