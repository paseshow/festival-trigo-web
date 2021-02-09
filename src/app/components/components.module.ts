import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ComponentRoutes } from './components.routing';
// COMPONENTES ---------------------------------------------
import { HomeComponent } from './home/home.component';
import { StreamingComponent } from './streaming/streaming.component';



@NgModule({
    imports: [
        RouterModule.forChild(ComponentRoutes),
        CommonModule,
        SlickCarouselModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        StreamingComponent
    ],
    providers: [],
})
export class ComponentsModule { }
