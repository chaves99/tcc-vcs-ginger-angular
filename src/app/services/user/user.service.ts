import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GlobalVariable } from "src/app/model/global";
import { UserRegisterReceived, UserRegisterSend } from "src/app/model/user-register";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    registerUrl: string = GlobalVariable.BASE_API_URL + "/user/create";
    getAllUrl: string = GlobalVariable.BASE_API_URL + "/user";

    constructor(
        private http: HttpClient
    ) { }

    create(user: UserRegisterSend) {
        return this.http.post<UserRegisterReceived>(this.registerUrl, user, { headers: GlobalVariable.httpHeaders }).pipe(catchError(this.handleError));
    }

    getAll() {
        return this.http.get<UserRegisterReceived[]>(this.getAllUrl, { headers: GlobalVariable.httpHeaders });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }
}