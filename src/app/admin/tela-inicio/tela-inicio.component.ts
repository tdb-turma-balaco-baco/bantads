import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Gerente } from 'src/app/shared/models/gerente/gerente.model';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {
  gerentes: Gerente[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.gerentes = this.listarTodos(), this.ordemCrescente();

  }

  listarTodos(): Gerente[] {
    return this.adminService.listarTodos();
  }
  ordemCrescente(): void {
    this.gerentes.sort((a, b) => a.nome!.localeCompare(b.nome!));

  }

}
