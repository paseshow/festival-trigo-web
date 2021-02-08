import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: 'configuracionEvento',
        loadChildren: () => import('./components/configuracion-evento/configuracion-evento.module').then(m => m.ConfiguracionEventoModule)
      },

    ]
  }
];
