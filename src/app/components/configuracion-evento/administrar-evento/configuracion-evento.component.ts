import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('btnModal', { static: false }) btnModal: ElementRef;

  spinner: boolean;
  tituloModal: string;
  formNewEvent: FormGroup;
  modal_title: string;

  listEventos: Eventoes[];
  linksEventos: String[];

  constructor(
    private fb: FormBuilder,
    private eventoesService: EventoesService
  ) {
    this.tituloModal = 'Agregar evento';
    this.listEventos = [];
    this.linksEventos = [];

  }

  ngOnInit(): void {
    this.buildFormNewEvent();
    this.loadEvents();
  }

  // ------------------------------------------------------
  // Inicializamos el formulario para crear un nuevo evento
  // ------------------------------------------------------
  buildFormNewEvent(): void {
    this.formNewEvent = this.fb.group({
      id: [''],
      nameEvento: ['', [Validators.required]],
      linkEvento: ['', [Validators.required]],
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

    //  cuando se crea un nuevo evento, otenemos el codigo del link de youtube
    if (this.modal_title == "Nuevo Evento") {
      let codigo: string = this.formNewEvent.get("linkEvento").value;
      let indice: any = this.formNewEvent.get("linkEvento").value;

      indice = codigo.indexOf("?v=", 0);
      let indiceA = codigo.indexOf("&", 0);

      if (indice > 0) {
        codigo = indiceA != -1 ? codigo.substring(indice + 3, indiceA) : codigo.substring(indice + 3, codigo.length);
        codigo = 'https://www.youtube.com/watch?v=' + codigo;
        this.formNewEvent.controls['linkEvento'].setValue(codigo);
        this.eventoesService.newEvent(this.formNewEvent).subscribe(
          (next) => {
            this.loadEvents();
            this.btnModal.nativeElement.click();
          }, error => {

          }
        )
      }

    } else {
      this.eventoesService.updateEvent(this.formNewEvent).subscribe(
        next => {
          this.listEventos = next;
          this.btnModal.nativeElement.click();
        }, error => {

        }
      )
    }
  };


  //--------------------------
  // Seteamos titulo del modal
  //--------------------------
  modalTitle(title: string, event?: Eventoes): void {
    this.spinner = true;
    switch (title) {
      case 'agregar':
        this.modal_title = "Nuevo Evento"

        this.formNewEvent.setValue({
          id: '',
          nameEvent: '',
          linkEvent: '',
          fechaEvento: '',
          active: false
        });

        break;

      case 'edit':
        this.modal_title = "Editar Evento"

        this.formNewEvent.setValue({
          id: event.id,
          nameEvento: event.nameEvento,
          linkEvento: event.linkEvento,
          fechaEvento: event.fechaEvento,
          active: event.active
        });
        break;
    }
  }

  //------------------------------------
  // Borramos evento 
  // @params: evento para borrar
  //------------------------------------
  deletEvent(event: Eventoes): void {
    this.spinner = true;
    Swal.fire({
      title: 'Esta seguro que quiere eliminar el evento?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventoesService.deleteEvento((event.id).toString()).subscribe(
          resp => {
          }, error => {
            if (error.status == 200) {
              this.loadEvents();
              this.spinner = false;
            }
          });
      } else {
        this.spinner = false;
      }
    })
  };


  //------------------
  // Cerramos modal
  //------------------
  cerrarModal(): void {
    this.spinner = false;
  }

}
