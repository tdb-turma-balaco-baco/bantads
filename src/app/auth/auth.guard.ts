import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './services/autenticacao.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: AutenticacaoService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const usuarioAutenticado = this.loginService.usuarioAutenticado;
    const returnURL = state.url;

    if (!usuarioAutenticado) {
      this.router.navigate(['/login'], {
        queryParams: { error: `Acesso proibido à ${returnURL}` },
      });
      return false;
    }

    if (
      route.data['role'] &&
      route.data['role'].indexOf(usuarioAutenticado) === -1
    ) {
      // Se o perfil do usuário não está no perfil da rota
      // redireciona p/ login
      this.router.navigate(['/login'], {
        queryParams: { error: `Proibido o acesso à ${returnURL}` },
      });
      return false;
    }

    // Se tiver o perfil da rota e está logado, garante acesso
    return true;
  }
}
