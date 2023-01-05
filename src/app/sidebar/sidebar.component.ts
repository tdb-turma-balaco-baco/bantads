import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {AutenticacaoService} from '../auth/services/autenticacao.service';
import {Usuario} from '../shared';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [NgbDropdownConfig],
})
export class SidebarComponent {
  activeId!: number;

  constructor(
    config: NgbDropdownConfig,
    private router: Router,
    private loginService: AutenticacaoService
  ) {
    config.placement = 'top-start';
  }

  get usuarioAutenticado(): Usuario | null {
    return this.loginService.usuarioAutenticado;
  }

  ngOnInit() {

  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
