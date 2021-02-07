import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutesConfig } from './configuracion-evento.routing';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ConfiguracionEventoComponent } from './administrar-evento/configuracion-evento.component';
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
    imports: [
        RouterModule.forChild(AppRoutesConfig),
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        ConfiguracionEventoComponent,
        AuthenticationComponent,
        ReportesComponent
    ],
    providers: [
        LoginService
    ],
})
export class ConfiguracionEventoModule { }
