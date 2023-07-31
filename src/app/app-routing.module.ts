import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './auth/auth-routing.module';
import { ClienteRoutes } from './cliente';
import { gerenteRoutes } from './gerente/gerente-routing.module';
import { adminRoutes } from './admin/admin.routes';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '',
    children: [...AuthRoutes],
    component: LoginLayoutComponent,
  },
  {
    path: '',
    children: [...adminRoutes, ...ClienteRoutes, ...gerenteRoutes],
    component: HomeLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
