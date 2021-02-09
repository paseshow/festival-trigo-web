import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlyrModule } from 'ngx-plyr';
import { RouterModule } from '@angular/router';
import { ComponentRoutes } from './components.routing';

// COMPONENTES ---------------------------------------------
import { HomeComponent } from './home/home.component';
import { StreamingComponent } from './streaming/streaming.component';
import { ModalFormComponent } from './home/modal-form/modal-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        RouterModule.forChild(ComponentRoutes),
        PlyrModule,
        CommonModule,
        ReactiveFormsModule

    ],
    exports: [],
    declarations: [
        HomeComponent,
        StreamingComponent,
        ModalFormComponent
    ],
    providers: [],
})
export class ComponentsModule { }
