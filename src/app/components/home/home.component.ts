import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventoesService } from 'src/app/services/eventoes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("cuerpoHtml", { static: false }) cuerpoHtml: ElementRef;

  correo: any;
  nombre: any;
  isMobile: boolean;

  constructor(
    private eventoesService: EventoesService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.isMobile = false;
    this.getFormulario();
  }

  slides = [{ nombre: "alcance", tamano: "100" }, { nombre: "asoCoperatArg", tamano: "100" }, { nombre: "bancor", tamano: "100" }, { nombre: "bertoto", tamano: "100" }, { nombre: "capello", tamano: "100" }, { nombre: "contimix", tamano: "100" }, { nombre: "contingiani", tamano: "100" }, { nombre: "coperativaleones", tamano: "100" }, { nombre: "gastaldi", tamano: "100" }, { nombre: "leones2", tamano: "100" }, { nombre: "metalfor", tamano: "100" }, { nombre: "ministerioAgGan", tamano: "100" }, { nombre: "salas", tamano: "100" }, { nombre: "torregiani", tamano: "100" }, { nombre: "union100", tamano: "100" }];

  images = ["bcca", "bolsacereales", "bolsacerealesba", "cbatodos", "escudoleones", "logoleones"];

  logosOficiales = ["agufran", "biolato", "bonxi", "cbajoven", "guantex", "gulf", "klein", "norte", "releyco", "cegro"]

  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 6,
    "nextArrow": "<div class='nav-btn next-slide prev-slide slick-arrow'></div>",
    "prevArrow": "<div class='nav-btn prev-slide prev-slide slick-arrow'></div>",
    "dots": false,
    "infinite": true
  };

  ngAfterViewChecked(): void {
    let a = this.cuerpoHtml.nativeElement.offsetWidth;

    if (a <= 466) {
      this.isMobile = true;
    }

  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  getFormulario(): void {

  }

  //-----------------------------------
  // Validamos evento activo y la fecha
  //-----------------------------------
  openStream() {
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
  }
}
