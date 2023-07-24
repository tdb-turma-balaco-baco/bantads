import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent {
  headerActions = [
    { label: 'ENTRAR', icon: 'account_circle', page: 'entrar' },
    { label: 'CADASTRO', icon: 'person_add', page: 'cadastro' }
  ];

  constructor(private router: Router) { }

  navigate(page: string) {
    this.router.navigate([page]);
  }
}
