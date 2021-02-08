import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Eventoes } from 'src/app/models/eventoes';
import { EventoesService } from 'src/app/services/eventoes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuracion-evento',
  templateUrl: './configuracion-evento.component.html',
  styleUrls: ['./configuracion-evento.component.scss']
})
export class ConfiguracionEventoComponent implements OnInit {

  spinner: boolean;
  tituloModal: string;
  formNewEvent: FormGroup;

  listEventos: Eventoes[];

  constructor(
    private fb: FormBuilder,
    private eventoesService: EventoesService
  ) {
    this.tituloModal = 'Agregar evento';
    this.listEventos = [];
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  // ------------------------------------------------------
  // Inicializamos el formulario para crear un nuevo evento
  // ------------------------------------------------------
  buildFormNewEvent(): void {
    this.formNewEvent = this.fb.group({
      nameEvent: ['', [Validators.required]],
      linkEvent: ['', [Validators.required]],
      activeChat: [false],
      fechaEvento: ['', [Validators.required]],
      active: [false]
    });
  };

  //--------------------------------------------
  // Traemos todos los eventos que se encuentran
  // cargados en la base de datos
  //--------------------------------------------
  loadEvents() {
    this.eventoesService.getListEvents().subscribe(
      resp => {
        this.listEventos = resp;
      }, error => {

      }
    );
  }

  //------------------------------------
  // Abrimos modal de evento para editar
  // @params: evento para editar
  //------------------------------------
  editEvent(): void {

  };

  //------------------------------------
  // Borramos evento 
  // @params: evento para borrar
  //------------------------------------
  deletEvent(event: Eventoes): void {
    Swal.fire({
      title: 'Esta seguro que quiere eliminar el evento?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result) {
        this.eventoesService.deleteEvento((event.id).toString()).subscribe(
          resp => {
          }, error => {
            if (error.status == 200) {
              this.loadEvents();
              this.spinner = true;
            }
          });
      }
    })
  };

}
