import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {Manager} from "../../shared/models/manager";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-listar-gerentes',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule],
  templateUrl: './listar-gerentes.component.html',
  styleUrls: ['./listar-gerentes.component.scss']
})
export class ListarGerentesComponent {
  managers: Manager[] = [
    {name: 'Hydrogen', cpf: '121.123.123-00', email: 'manager@mail', phonenumber: '20'},
    {name: 'Hydrogen2', cpf: '121.123.123-01', email: 'manager@mail4', phonenumber: '20'},
    {name: 'Hydrogen1', cpf: '121.123.123-02', email: 'manager@mail3', phonenumber: '20'},
    {name: 'Hydrogen3', cpf: '121.123.123-03', email: 'manager@mail2', phonenumber: '20'},
    {name: 'Hydrogen4', cpf: '121.123.123-04', email: 'manager@mail1', phonenumber: '20'},
  ];

  displayedColumns: string[] = ['name', 'cpf', 'email', 'phonenumber', 'actions'];
  dataSource = new MatTableDataSource<Manager>(this.managers);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
