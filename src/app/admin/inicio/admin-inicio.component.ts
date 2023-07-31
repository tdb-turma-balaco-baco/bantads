import {Component, OnInit} from '@angular/core';
import {ManagerDash} from "../../shared/models/manager-dash";
import {ManagerService} from "../../services/manager.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-inicio',
  templateUrl: './admin-inicio.component.html',
})
export class AdminInicioComponent implements OnInit {
  managers$!: Observable<ManagerDash[]>;

  constructor(private managerService: ManagerService) {
  }

  ngOnInit(): void {
    this.managers$ = this.managerService.findAllManagersDashboardInfo();
  }

  disableManager($event: any, managerId: number) {
    this.managerService
      .disableManagerById(managerId)
      .subscribe(r => console.log(r));
  }
}
