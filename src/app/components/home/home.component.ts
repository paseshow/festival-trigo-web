import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  correo: any;
  nombre: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.getFormulario();
  }

  getFormulario(): void {

  }
}
