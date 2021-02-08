import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    newEvent(newEvento): Observable<Eventoes> {
        const jsonEvento = {
            nameEvento: newEvento.get("nameEvento").value,
            linkEvento: newEvento.get("linkEvento").value,
            fechaEvento: newEvento.get("fechaEvento").value,
            active: newEvento.get("active").value
        };

        return this.http.post<Eventoes>(environment.apiUrl + this.endpoint + 'add', jsonEvento).pipe(take(1));
    }

    updateEvent(eventoUpdate): Observable<Eventoes[]> {
        const jsonEvento = {
            id: eventoUpdate.get("id").value,
            nameEvento: eventoUpdate.get("nameEvento").value,
            linkEvento: eventoUpdate.get("linkEvento").value,
            fechaEvento: eventoUpdate.get("fechaEvento").value,
            active: eventoUpdate.get("active").value
        };

        return this.http.put<Eventoes[]>(environment.apiUrl + this.endpoint + 'update', jsonEvento).pipe(take(1));
    }

}