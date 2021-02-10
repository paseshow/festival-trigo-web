import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CommonService {

    sesion: string;

    constructor() { }

    getSesion() {
        return this.sesion;
    }

    setSesion(sesion: string) {
        this.sesion = sesion;
    }

}