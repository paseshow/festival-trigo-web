import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Formularios } from '../models/formularios';

@Injectable({ providedIn: 'root' })
export class FormulariosService {

    endpoint = "formularios/";

    constructor(
        private http: HttpClient
    ) { }

    getReporteFormularios() {
        return this.http.get(environment.apiUrl + this.endpoint + 'export/listado').pipe(take(1));
    }

}