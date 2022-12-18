import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './auth/auth-routing.module';
import { ClienteRoutes } from './cliente';
import { gerenteRoutes } from './gerente/gerente-routing.module';
import { adminRoutes } from './admin/admin-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';


const routes: Routes = [
  // TODO: Atualizar o redirectTo do root
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children:[
      { path: '', pathMatch: 'full', component: LoginComponent }
    ]
  },
  {
    path: 'cadastro',
    component: LoginLayoutComponent,
    children:[
      { path: '', pathMatch: 'full', component: CadastroComponent }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children:[


      ...adminRoutes,
      ...AuthRoutes,
      ...ClienteRoutes,
      ...gerenteRoutes,
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
