import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'festivalTrigo';

  urlUser: boolean;

  constructor(
    @Inject(DOCUMENT) document: any
  ) {
    this.urlUser = true;
  }

  // ----------------------------------------
  // Validamos la url para mostrar diferentes
  // accesos del navbar
  // ----------------------------------------
  ngOnInit(): void {
    let url = document.location.href;

    if (url.indexOf('configuracionEvento') != -1) {
      this.urlUser = false;
    }
  }

}
