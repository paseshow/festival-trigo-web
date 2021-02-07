import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// COMPONENTES ---------------------------------------------
import { HomeComponent } from './home/home.component';
import { StreamingComponent } from './streaming/streaming.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        BrowserModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
        StreamingComponent
    ],
    providers: [],
})
export class ComponentsModule { }
