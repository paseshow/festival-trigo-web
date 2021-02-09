import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as Plyr from "plyr";

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss']
})
export class StreamingComponent implements OnInit {

  dataSetup: any;

  opcionesReproductor: Plyr.Options;
  reproductor: Plyr;
  sourceVideo: Plyr.Source[];

  constructor(
    private sanitizationService: DomSanitizer,
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
    this.comienzaStream();
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
        src: "gOCBOiqbU0c",
        provider: "youtube",
      },
    ];
  };

  //----------------------------------
  // Metodo propio de la libreria Plyr
  //----------------------------------
  played(event: Plyr.PlyrEvent) {
  };

}
