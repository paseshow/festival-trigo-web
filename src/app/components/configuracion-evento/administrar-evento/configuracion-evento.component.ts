import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder
  ) {
    this.tituloModal = 'Agregar evento'
  }

  ngOnInit(): void {
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
  deletEvent(): void {
    Swal.fire({
      title: 'Esta seguro que quiere eliminar el evento?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result) {
        this.spinner = true;
      }
    })
  };

}
