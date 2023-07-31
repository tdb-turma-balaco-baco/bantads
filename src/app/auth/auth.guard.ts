import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {UserType} from "../shared/models/user-type.enum";

const NOT_AUTHENTICATED = 'Você precisa estar autenticado';
const NOT_AUTHORIZED = 'Você nao pode acessar essa pagina';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn;

    if (!isLoggedIn) {
      return this.redirectToLoginWithError(NOT_AUTHENTICATED);
    } else if (!this.authService.userType || !this.validUserAuthorization(route,this.authService.userType)) {
      return this.redirectToLoginWithError(NOT_AUTHORIZED);
    }

    return true;
  }

  private validUserAuthorization(route: ActivatedRouteSnapshot, userType: UserType): boolean {
    return route.data['role'] && route.data['role'].indexOf(userType) !== -1;
  }

  private redirectToLoginWithError(message: string) {
    this.router.navigate(['/login'], {
      queryParams: {error: message},
    });
    return false;
  }
}
