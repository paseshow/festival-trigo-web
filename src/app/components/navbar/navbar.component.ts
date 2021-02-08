import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    userAdmin: boolean;
    sesion: string;

    @Input() userConfig: boolean;

    constructor(
        private route: Router
    ) {
        this.userAdmin = false;
        this.sesion = 'Iniciar';
    }

    ngOnInit(): void { }

    //----------------------------------------
    // Validamos si hay algun usuario logueado
    //----------------------------------------
    ngOnChanges(): void {
        if (localStorage.getItem('token')) {
            this.sesion = 'Cerrar';
        }
    };

    //------------------------------------------------------
    // Metodo para detectar la seleccion de items del navbar
    // @params: seccionSeleccionada
    //------------------------------------------------------
    navbarAdmin(seccion: string): void {
        switch (seccion) {
            case 'config':
                this.route.navigate(['/configuracionEvento/admin'])
                break;
            case 'reportes':
                this.route.navigate(['/configuracionEvento/report']);
                break;
            case 'sesion':
                if (this.sesion == 'Cerrar') {
                    localStorage.clear();
                    this.sesion = 'Iniciar';
                }
                this.route.navigate(['/configuracionEvento']);
                break;
        }

    };
}