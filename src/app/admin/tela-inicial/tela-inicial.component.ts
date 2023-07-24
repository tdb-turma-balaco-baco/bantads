import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {ManagerInfo} from "../../shared/models/manager-info";

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements AfterViewInit {
  managers: ManagerInfo[] = [
    {name: 'Hydrogen', totalClients: 10, positiveBalanceSum: 300, negativeBalanceSum: 20},
    {name: 'Hydrogen1', totalClients: 11, positiveBalanceSum: 200, negativeBalanceSum: 20},
    {name: 'Hydrogen2', totalClients: 12, positiveBalanceSum: 300, negativeBalanceSum: 70},
    {name: 'Hydrogen3', totalClients: 13, positiveBalanceSum: 100, negativeBalanceSum: 60},
    {name: 'Hydrogen4', totalClients: 14, positiveBalanceSum: 200, negativeBalanceSum: 20},
    {name: 'Hydrogen5', totalClients: 15, positiveBalanceSum: 100, negativeBalanceSum: 30},
  ];

  displayedColumns: string[] = ['name', 'totalClients', 'positiveBalanceSum', 'negativeBalanceSum'];
  dataSource = new MatTableDataSource<ManagerInfo>(this.managers);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
