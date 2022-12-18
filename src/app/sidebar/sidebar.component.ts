import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../auth/services/autenticacao.service';
import { Usuario } from '../shared';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [NgbDropdownConfig],
})
export class SidebarComponent {
  activeId!: number;

  isLoggedIn$!: Observable<boolean>;

  constructor(
    config: NgbDropdownConfig,
    private router: Router,
    private loginService: AutenticacaoService
  ) {
    config.placement = 'top-start';
  }
  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
  }
  get usuarioAutenticado(): Usuario | null {
    return this.loginService.usuarioAutenticado;
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }


}
