import { Injectable } from '@angular/core';
import { LoginInput } from 'src/app/model/login-input';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(input: LoginInput): boolean {
    if (input.email === "vinicius" && input.password === "123") {
      return true;
    }
    return false;
  }
}
