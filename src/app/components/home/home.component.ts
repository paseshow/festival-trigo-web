import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // slides = ["BolsaCerealesBahiaB", "BolsaCerealescordoba" , "BolsadeCereales", "Clubleones", "Cordobaentretodos", "MinisterioAgriculturaganaderia", "Sociedadruraleones"];

  slides = [{nombre: "alcance", tamano: "100"},{nombre: "asoCoperatArg", tamano: "100"}, {nombre: "bancor", tamano: "100"}, {nombre: "bertoto", tamano: "100"}, {nombre: "capello", tamano: "100"}, {nombre: "contimix", tamano: "100"}, {nombre: "contingiani", tamano: "100"}, {nombre: "coperativaleones", tamano: "100"}, {nombre: "gastaldi", tamano: "100"}, {nombre: "leones2", tamano: "100"}, {nombre: "metalfor", tamano: "100"}, {nombre: "ministerioAgGan", tamano: "100"}, {nombre: "salas", tamano: "100"}, {nombre: "torregiani", tamano: "100"}, {nombre: "union100", tamano: "100"}];


  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };

  // addSlide() {
  //   this.slides.push()
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e) {
  //   console.log('breakpoint');
  // }

  // afterChange(e) {
  //   console.log('afterChange');
  // }

  // beforeChange(e) {
  //   console.log('beforeChange');
  // }

  
}
