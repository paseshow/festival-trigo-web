import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { FormularioIngreso } from '../models/formularios';

@Injectable({ providedIn: 'root' })
export class FormulariosService {

    endpoint = "Formularios/";

    constructor(
        private http: HttpClient
    ) { }

    getReporteFormularios() {
        return this.http.get(environment.apiUrl + this.endpoint + 'export/listado').pipe(take(1));
    };

    addForm(form: FormularioIngreso) {
        return this.http.post(environment.apiUrl + this.endpoint + 'add', JSON.stringify(form)).pipe(take(1));
    }

}