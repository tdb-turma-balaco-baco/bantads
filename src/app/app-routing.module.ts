import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './auth/auth-routing.module';
import { ClienteRoutes } from './cliente';
import { gerenteRoutes } from './gerente/gerente-routing.module';

const routes: Routes = [
  // TODO: Atualizar o redirectTo do root
  { path: '', pathMatch: 'full', redirectTo: 'gerente/inicio' },
  ...AuthRoutes,
  ...ClienteRoutes,
  ...gerenteRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
