import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Formularios } from 'src/app/models/formularios';
import { FormulariosService } from 'src/app/services/formularios.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  spinner: boolean;
  tipoReporte: string;

  constructor(
    private formulariosService: FormulariosService
  ) {
    this.tipoReporte = '0';
    this.spinner = false;
  }

  ngOnInit(): void {
  }

  //-------------------------------------
  // Descargamos reporte en formato .xlxs
  //-------------------------------------
  downloadReport(): void {
    this.spinner = true;
    this.formulariosService.getReporteFormularios().subscribe(
      resp => {
        this.spinner = false;
      }, error => {

      }
    )
  };

  selectTipoReport(event) {
    this.tipoReporte = event.target.value;
  };
}
