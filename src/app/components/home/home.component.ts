import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  correo: any;
  nombre: any;

  constructor() { }

  ngOnInit(): void {
    
    //this.getFormulario();
  }

  // detectarTamañoPantalla(){

  //   if(screen.width < 361) {

  //     this.slideConfig.slidesToShow = 3;
  
  //   } else if(screen.width > 361 && screen.width < 530){
  //     this.slideConfig.slidesToShow = 4;
  //   };
    
  //   if(screen.width > 530 && screen.width < 880){
  //     this.slideConfig.slidesToShow = 5;
  //   } else {
  //     this.slideConfig.slidesToShow = 6;
  //   };

  //   switch (true) {
  //     case screen.width > 990:
  //       this.slideConfig.slidesToShow = 6;
  //       break;
  //     case screen.width > 769 && screen.width < 989:
  //       this.slideConfig.slidesToShow = 5;
  //       break;
  //     case screen.width > 570 && screen.width < 769:
  //       this.slideConfig.slidesToShow = 4;
  //       break;
  //     case screen.width < 361:
  //       this.slideConfig.slidesToShow = 3;
  //       break;
  //     default:
  //       break;
  //   }
  // };



  slides = [{nombre: "bancor", tamano: "100"}, {nombre: "gastaldi", tamano: "100"}, {nombre: "fugran", tamano: "100"},  {nombre: "ministerioAgGan", tamano: "100"}, {nombre: "alcance", tamano: "100"},{nombre: "asoCoperatArg", tamano: "100"}, {nombre: "bertoto", tamano: "100"}, {nombre: "capello", tamano: "100"}, {nombre: "contimix", tamano: "100"}, {nombre: "contingiani", tamano: "100"}, {nombre: "coperativaleones", tamano: "100"},  {nombre: "leones2", tamano: "100"}, {nombre: "metalfor", tamano: "100"}, {nombre: "salas", tamano: "100"}, {nombre: "torregiani", tamano: "100"}, {nombre: "union100", tamano: "100"}, ];
 
 
  images = ["bcca", "bolsacereales", "bolsacerealesba", "cbatodos", "escudoleones", "logoleones"];

  logosOficiales = ["agufran", "biolato", "bonxi", "cbajoven", "guantex", "gulf", "klein", "norte", "releyco", "cegro"]

  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 6,
    "nextArrow": "<div class='nav-btn next-slide prev-slide slick-arrow'></div>",
    "prevArrow": "<div class='nav-btn prev-slide prev-slide slick-arrow'></div>",
    "dots": true,
    "infinite": true
  };

  
}
