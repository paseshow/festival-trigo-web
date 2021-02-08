import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss']
})
export class StreamingComponent implements OnInit {

  dataSetup: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSetup = {
      techOrder: ["youtube"],
      sources: [
        {
          type: "video / youtube",
          src: "https://www.youtube.com/watch?v=iBAs3TGIz7M&list=RDMMgOCBOiqbU0c&index=4"
        }
      ],
      Youtube: {
        ytControls: 2
      }
    };
  }

}
