import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  tipoReporte: string;

  constructor() {
    this.tipoReporte = '0';
  }

  ngOnInit(): void {
  }

  //-------------------------------------
  // Descargamos reporte en formato .xlxs
  //-------------------------------------
  downloadReport(): void {
    debugger
  };

  selectTipoReport(event) {
    this.tipoReporte = event.target.value;
  };
}
