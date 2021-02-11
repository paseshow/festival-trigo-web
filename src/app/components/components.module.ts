import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlyrModule } from 'ngx-plyr';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ComponentRoutes } from './components.routing';
// COMPONENTES ---------------------------------------------
import { HomeComponent } from './home/home.component';
import { ModalFormComponent } from './home/modal-form/modal-form.component';
import { StreamingComponent } from './streaming/streaming.component';



@NgModule({
    imports: [
        RouterModule.forChild(ComponentRoutes),
        PlyrModule,
        CommonModule,
        SlickCarouselModule,
        ReactiveFormsModule

    ],
    exports: [
        
    ],
    declarations: [
        HomeComponent,
        StreamingComponent,
        ModalFormComponent
    ],
    providers: [],
})
export class ComponentsModule { }
