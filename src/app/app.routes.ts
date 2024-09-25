import { Routes } from '@angular/router';
import { SectoresActividadesComponent } from './components/sectores-actividades/sectores-actividades.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

export const routes: Routes = [
    {path: 'inicio', component: BienvenidaComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'sectoresactividades', component: SectoresActividadesComponent}
];
