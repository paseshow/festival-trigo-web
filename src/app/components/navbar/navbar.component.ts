import { AfterViewChecked, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventoes } from 'src/app/models/eventoes';
import { CommonService } from 'src/app/services/common.service';
import { EventoesService } from 'src/app/services/eventoes.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnChanges, AfterViewChecked {

    userAdmin: boolean;
    sesion: string;
    eventoActivo: Eventoes;

    @Input() userConfig: boolean;

    constructor(
        private route: Router,
        private eventoesService: EventoesService,
        private commonService: CommonService
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

    ngAfterViewChecked(): void {
        this.sesion = this.commonService.getSesion();
    }

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
                    this.commonService.setSesion('Iniciar');
                    this.sesion = 'Iniciar';
                }
                this.route.navigate(['/configuracionEvento']);
                break;
        }
    };

    smmoothScroll(seccion: string): void {
        document.getElementById(`${seccion}`).scrollIntoView();
    }

    //-----------------------------------------------------------
    // Antes de redirigir al stream, validamos la fecha y la hora
    // con el evento habilitado.
    //-----------------------------------------------------------
    openStream(): void {
        this.eventoesService.getEventosActivos().subscribe(
            next => {
                let fechaHoy: any = Date.now();

                next.forEach(unEvento => {
                    if (Date.parse(unEvento.fechaEvento) < fechaHoy)
                        this.route.navigate(['/stream']);
                    else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Aun el evento no esta activo!',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                });
            }, error => {

            });
    };
}