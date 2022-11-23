import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteRoutes } from './cliente';

const routes: Routes = [
  // TODO: Atualizar o redirectTo do root
  { path: '', pathMatch: 'full', redirectTo: 'cliente/inicio' },
  ...ClienteRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
