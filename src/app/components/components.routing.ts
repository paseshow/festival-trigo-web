import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StreamingComponent } from './streaming/streaming.component';

export const ComponentRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'stream',
                component: StreamingComponent
            }
        ]
    }
]