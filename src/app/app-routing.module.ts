import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'configuracionEvento',
        loadChildren: () => import('./components/configuracion-evento/configuracion-evento.module').then(m => m.ConfiguracionEventoModule)
      }
    ]
  }
];
