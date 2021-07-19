import { Component } from '@angular/core';
import { LoginInput } from 'src/app/model/login-input';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hiddenError: boolean = true;
  errorMessage?: string;

  model: LoginInput = { email: '', password: '' };

  constructor(
    private loginService: LoginService
  ) { }

  login() {
    // rules for login
    this.loginService.login(this.model);
  }

}