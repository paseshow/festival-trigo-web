import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formularios } from 'src/app/models/formularios';
import { FormulariosService } from 'src/app/services/formularios.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  spinner: boolean;
  tipoReporte: string;
  urlServer: string;

  constructor(
    private formulariosService: FormulariosService,
    private route: Router
  ) {
    this.tipoReporte = '0';
    this.spinner = false;
    this.urlServer = environment.apiUrl;
  }

  ngOnInit(): void {
    this.validUserLogged();
  }

  //---------------------------------------
  // Validamos si hay algun usuario logeado
  //---------------------------------------
  validUserLogged(): void {
    if (!localStorage.getItem('token')) {
      this.route.navigate(['/configuracionEvento']);
    }
  };

  selectTipoReport(event) {
    this.tipoReporte = event.target.value;
  };
}
