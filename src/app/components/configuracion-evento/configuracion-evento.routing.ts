import { Routes } from '@angular/router';
import { ConfiguracionEventoComponent } from './administrar-evento/configuracion-evento.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReportesComponent } from './reportes/reportes.component';

export const AppRoutesConfig: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AuthenticationComponent
            },
            {
                path: 'admin',
                component: ConfiguracionEventoComponent
            },
            {
                path: 'report',
                component: ReportesComponent
            }
        ]
    }
]