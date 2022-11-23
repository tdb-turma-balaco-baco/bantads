import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Perfil } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  // TODO: Implementar o método
  currentProfilePrivilege(): Perfil {
    return 'CLIENTE';
    // return 'ADMIN';
    // return 'GERENTE';
  }

  logout() {
    // this.authService.logout();
    console.log("Logout");
    // this.router.navigate(['/login']);
  }
}
