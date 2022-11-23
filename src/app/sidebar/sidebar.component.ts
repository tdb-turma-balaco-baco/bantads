import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [NgbDropdownConfig],
})
export class SidebarComponent {
  activeId!: number;

  constructor(config: NgbDropdownConfig) {
    config.placement = 'top-start';
  }
}
