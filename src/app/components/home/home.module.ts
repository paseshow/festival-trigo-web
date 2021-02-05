import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { routesHome } from './home.routing';


@NgModule({
    imports: [CommonModule,
    RouterModule.forChild(routesHome)
    ],
    exports: [],
    declarations: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }
