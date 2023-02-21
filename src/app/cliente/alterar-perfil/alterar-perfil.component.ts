import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/auth/services/autenticacao.service';
import {
  Cliente,
  Cidade,
  Estado,
  CidadeService,
  EstadoService,
  Usuario,
  Endereco,
} from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-alterar-perfil',
  templateUrl: './alterar-perfil.component.html',
  styleUrls: ['./alterar-perfil.component.css'],
})
export class AlterarPerfilComponent {
  @ViewChild('formAlterarPerfil') formAlterarPerfil!: NgForm;

  usuario!: Usuario;
  public cliente!: Cliente;
  loading!: boolean;

  public estados$!: Observable<Estado[]>;
  public cidades$!: Observable<Cidade[]>;

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private clienteService: ClienteService,
    private authService: AutenticacaoService,
    public router: Router
  ) {
    this.estados$ = this.estadoService.listarTodosEstados();
    this.cidades$ = this.cidadeService.listarTodasCidades();
  }

  ngOnInit(): void {
    this.usuario = this.authService.usuarioAutenticado;

    // inicialização padrão dos objetos, pra evitar erros
    // em runtime o service já preenche os objetos com
    // os valores corretos
    this.cliente = new Cliente();
    this.cliente.endereco = new Endereco();
    this.cliente.endereco.cidade = new Cidade();
    this.cliente.endereco.cidade.estado = new Estado();

    this.clienteService.buscarClientePorCPF(+this.usuario.CPF?).subscribe({
      next: (cliente: Cliente) => {
        this.cliente = cliente;
      },
    });

    this.loading = false;
  }

  atualizar() {
    this.loading = true;

    if (this.formAlterarPerfil.form.valid) {
      this.clienteService.atualizar(this.cliente).subscribe({
        complete: () => {
          this.loading = false;
          this.router.navigate(['/login']);
        },
      });
    }

    this.loading = false;
  }
}
