import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioIngreso } from 'src/app/models/formularios';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit, AfterViewInit {

  modalForm: FormGroup
  submitted = false;
  buttonCloseModal: any;
  myModal: any;
  noEsHora: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private formularioInitService: FormulariosService
  ) {
    this.noEsHora = true;
  }

  get fm() { return this.modalForm.controls; }

  ngOnInit(): void {

    this.modalForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });

  };


  ngAfterViewInit() {
    var myModal = document.getElementById('btnModal');
    myModal.click();

    this.contador();
  }

  // ---------------------------------------------------------------
  // Validacion de campos requeridos en el formulario modalForm
  // Guardamos los datos con el servicio y cuando se haya guardado
  // correctamente, obtenemos los eventos que estan activos en el dia
  // ----------------------------------------------------------------
  onSubmit() {
    this.submitted = true;
    if (this.modalForm.valid) {

      const form = new FormularioIngreso();

      form.nombre = this.modalForm.get("nombre").value;
      form.apellido = this.modalForm.get("apellido").value;
      form.correo = this.modalForm.get("email").value;
      form.telefono = this.modalForm.get("phone").value;

      // guardamos el formulario y la respuesta del back, también guardamos el id del usuario.
      // this.formularioInitService.addForm(form).subscribe(
      //   (resp: FormularioIngreso) => {
      //   }, error => {
      //   });

    }
  };

  contador() {
    var fecha = new Date(2020, 1, 11, 18, 0, 0);
    var hoy = new Date();
    var dias = 0
    var horas = 0
    var minutos = 0
    var segundos = 0

    if (fecha >= hoy && this.noEsHora) {
      var diferencia = (fecha.getTime() - hoy.getTime()) / 1000
      dias = Math.floor(diferencia / 86400)
      diferencia = diferencia - (86400 * dias)
      horas = Math.floor(diferencia / 3600)
      diferencia = diferencia - (3600 * horas)
      minutos = Math.floor(diferencia / 60)
      diferencia = diferencia - (60 * minutos)
      segundos = Math.floor(diferencia)
      document.getElementById("contador").innerHTML = "" + dias + " : " + horas + " : " + minutos + " : " + segundos;
      if (dias >= 0 || horas >= 0 || minutos >= 0 || segundos >= 0) {
        setTimeout(() => {
          this.contador();
        }, 1000)
      } else {
        this.noEsHora = false;
      }
    }
    else {
      this.noEsHora = false;
    }
  }
}