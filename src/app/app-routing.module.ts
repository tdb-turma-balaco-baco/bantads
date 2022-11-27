import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteRoutes } from './cliente';
import { gerenteRoutes } from './gerente/gerente-routing.module';

const routes: Routes = [
  // TODO: Atualizar o redirectTo do root
  /*{ path: '', pathMatch: 'full', redirectTo: 'cliente/inicio' },
  ...ClienteRoutes,*/
  { path: '', pathMatch: 'full', redirectTo: 'gerente/inicio' },
  ...gerenteRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
