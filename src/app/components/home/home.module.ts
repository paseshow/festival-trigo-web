import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppRoutesHome } from './home.routing';

@NgModule({
    imports: [
        RouterModule.forChild(AppRoutesHome)
    ],
    exports: [],
    declarations: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }
