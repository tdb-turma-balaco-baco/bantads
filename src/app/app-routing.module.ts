import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './auth/auth-routing.module';
import { ClienteRoutes } from './cliente';
import { gerenteRoutes } from './gerente/gerente-routing.module';
import { adminRoutes } from './admin/admin-routing.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  ...adminRoutes,
  ...AuthRoutes,
  ...ClienteRoutes,
  ...gerenteRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
