import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';
import { Usuario } from 'src/app/shared';
import { Gerente } from 'src/app/shared/models/gerente/gerente.model';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.css']
})
export class AdminInicioComponent implements OnInit {
  gerentes: Gerente[] = [];
  perfilAtual!: Usuario;

  constructor(private adminService: AdminService,
              private authService: AutenticacaoService) { }

  ngOnInit(): void {
    this.perfilAtual = this.authService.usuarioAutenticado;
    this.gerentes = this.listarTodos();
    this.gerentes.sort((gerenteA, gerenteB) => gerenteA.nome!.localeCompare(gerenteB.nome!));
  }

  listarTodos(): Gerente[] {
     this.adminService.listarTodosGerentes().subscribe({
      next: (data: Gerente[]) => {
        if (data === null) {
          this.gerentes = [];
        } else {
          this.gerentes = data.sort((gerenteA, gerenteB) =>
          gerenteA.nome!.toLowerCase().localeCompare(gerenteB.nome!.toLowerCase()));
        }
      }
      });
      return this.gerentes;
  }

  remover($event: any, gerente: Gerente): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o Gerente? "' + gerente.nome + '"?')) {
    this.adminService.removerGerente(gerente.id!).subscribe({
      complete: () => { this.listarTodos(); }
    });
    }
  }



}
