import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as Plyr from "plyr";
import { EventoesService } from 'src/app/services/eventoes.service';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss']
})
export class StreamingComponent implements OnInit {

  dataSetup: any;
  url: string = '';
  opcionesReproductor: Plyr.Options;
  reproductor: Plyr;
  sourceVideo: Plyr.Source[];

  constructor(
    private sanitizationService: DomSanitizer,
    private eventoesService: EventoesService
  ) {
    this.reproductor = new Plyr("#player");
    this.opcionesReproductor = {
      clickToPlay: false,
      fullscreen: { enabled: false, fallback: false, iosNative: false },
      controls: [],
      keyboard: { focused: false, global: false },
      youtube: { noCookie: false },
    };
  }

  ngOnInit(): void {
    this.eventActive();
  }

  //---------------------------
  // Inicializamos stream
  //---------------------------
  comienzaStream(controles?: string[]) {

    this.opcionesReproductor = {
      clickToPlay: true,
      fullscreen: { enabled: true, fallback: true, iosNative: false },
      controls: controles ? controles
        : [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "airplay",
          "fullscreen",
        ],
      keyboard: {
        focused: true,
        global: true
      },
      autoplay: true,
      loop: { active: false },
      youtube: { noCookie: false },
    };

    this.sourceVideo = [
      {
        src: `${this.url}`,
        provider: "youtube",
      },
    ];
  };

  //----------------------------------
  // Metodo propio de la libreria Plyr
  //----------------------------------
  played(event: Plyr.PlyrEvent) {
  };

  //-------------------------------------
  // traemos evento activo
  //-------------------------------------
  eventActive() {

    this.eventoesService.getEventosActivos().subscribe(
      next => {
        let fechaHoy: any = Date.now();

        next.forEach(unEvento => {
          if (Date.parse(unEvento.fechaEvento) < fechaHoy) {
            let indice = unEvento.linkEvento.indexOf("?v=", 0);
            let indiceA = unEvento.linkEvento.indexOf("&", 0);
            this.url = indiceA != -1 ? unEvento.linkEvento.substring(indice + 3, indiceA) : unEvento.linkEvento.substring(indice + 3, unEvento.linkEvento.length);
            this.comienzaStream();

          }

        });
      }, error => {

      });
  }

}
