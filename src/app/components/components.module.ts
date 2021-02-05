import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfiguracionEventoComponent } from './configuracion-evento/configuracion-evento.component';
import { HomeComponent } from './home/home.component';
import { StreamingComponent } from './streaming/streaming.component';

// COMPONENTES ---------------------------------------------


@NgModule({
    imports: [CommonModule,
    RouterModule],
    exports: [],
    declarations: [

    HomeComponent,

    ConfiguracionEventoComponent,

    StreamingComponent],
    providers: [],
})
export class ComponentsModule { }
