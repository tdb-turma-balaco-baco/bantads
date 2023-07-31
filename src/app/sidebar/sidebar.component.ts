import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {AutenticacaoService} from '../auth/services/autenticacao.service';
import {Usuario} from '../shared';
import {AuthService} from "../services/auth.service";
import {UserType} from "../shared/models/user-type.enum";

export type NavRoute = {
  route: string;
  icon: string;
  description: string
}

export type NavigationRoutesByUserType = { [T in UserType]: NavRoute[] };

const navigationRoutes: NavigationRoutesByUserType = {
  [UserType.ADMIN]: [
    {route: '/admin', icon: 'fa-solid fa-clipboard-user', description: 'Gerentes'},
    {route: '/admin/clientes', icon: 'fa-solid fa-people-group', description: 'Relatório de Clientes'},
  ],
  [UserType.MANAGER]: [
    {route: '/gerente', icon: 'fa-solid fa-people-group', description: 'Clientes'},
    {route: '/gerente/clientes', icon: 'fa-solid fa-magnifying-glass', description: 'Pesquisar'},
    {route: '/gerente/consultar-cliente', icon: 'fa-solid fa-ranking-star', description: 'Ranking'},
  ],
  [UserType.CLIENT]: [
    {route: '/extrato', icon: 'fa-solid fa-receipt', description: 'Extrato'},
    {route: '/transferir', icon: 'fa-solid fa-money-bill-transfer', description: 'Transferência'},
    {route: '/sacar', icon: 'fa-solid fa-hand-holding-dollar', description: 'Saque'},
    {route: '/depositar', icon: 'fa-solid fa-piggy-bank', description: 'Depositar'},
    {route: '/perfil', icon: 'fa-solid fa-address-card', description: 'Perfil'},
  ]
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [NgbDropdownConfig],
})
export class SidebarComponent {
  activeId!: number;
  avaliableNavRoutes!: NavRoute[];

  constructor(
    config: NgbDropdownConfig,
    private router: Router,
    private authService: AuthService
  ) {
    config.placement = 'top-start';
  }

  ngOnInit() {
    if (!this.authService.userType) {
      throw new Error('Erro ao recuperar o tipo do usuario');
    }
    this.avaliableNavRoutes = navigationRoutes[this.authService.userType] as NavRoute[];
  }

  logout() {
    this.authService.logout();
    return this.router.navigate(['/login']);
  }

}
