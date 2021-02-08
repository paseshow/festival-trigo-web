import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoginService {

    endpoint = "auth/";

    constructor(
        private http: HttpClient
    ) { }


    authentication(login: Login) {
        const headers = new HttpHeaders({ 'Content-Type': "application/json" });

        return this.http.post(environment.apiUrl + this.endpoint + 'login', JSON.stringify(login), { headers: headers }).pipe(take(1));
    }

}