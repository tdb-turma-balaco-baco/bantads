import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Perfil } from '../shared';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [NgbDropdownConfig],
})
export class SidebarComponent {
  activeId!: number;
  currentProfileRole!: Perfil;

  constructor(config: NgbDropdownConfig, private router: Router) {
    config.placement = 'top-start';
    this.currentProfileRole = this.initializeProfileRole();
  }

  initializeProfileRole(): Perfil {
    return 'CLIENTE';
  }

  logout(): void {
    console.log("Logout feito!");
    this.currentProfileRole === 'ADMIN' ? this.currentProfileRole = 'CLIENTE' : this.currentProfileRole = 'ADMIN';
  }
}
