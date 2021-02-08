import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Eventoes } from '../models/eventoes';

@Injectable({ providedIn: 'root' })
export class EventoesService {

    endpoint = "eventoes/";

    constructor(
        private http: HttpClient
    ) { }

    getListEvents(): Observable<Eventoes[]> {
        return this.http.get<Eventoes[]>(environment.apiUrl + this.endpoint + 'listAll').pipe(take(1));
    }

    deleteEvento(idEvento: string) {
        return this.http.delete(environment.apiUrl + this.endpoint + `${idEvento}`).pipe(take(1));
    }

}