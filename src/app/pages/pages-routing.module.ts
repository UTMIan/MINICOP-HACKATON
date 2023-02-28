import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: 'mensajes',
        loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
      },
      {
        path: 'contactos',
        loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
      },      {
        path: "principal",
        loadChildren: () => import("./principal/principal.module").then(m => m.PrincipalPageModule)
      },
      {
        path: "tips",
        loadChildren: () => import("./tips/tips.module").then(m => m.TipsPageModule)
      },
      {
        path: "ubicacion",
        loadChildren: () => import("./ubicacion/ubicacion.module").then(m => m.UbicacionPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
