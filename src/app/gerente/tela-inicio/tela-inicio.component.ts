import {Component} from '@angular/core';
import {GerenteService} from '../services';
import {Cliente, Usuario} from "../../shared";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalRecusarContaComponent} from "../modal-recusar-conta";
import { AutenticacaoService } from 'src/app/auth/services';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
})
export class TelaInicioComponent {
  clientes: Cliente[] = [];
  usuario: Usuario = new Usuario();

  constructor(
    private gerenteService: GerenteService,
    private autenticacaoService: AutenticacaoService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.usuario = this.autenticacaoService.usuarioAutenticado;
    console.log(this.usuario);
    this.listarClientesPendentesAprovacao();
  }

  listarClientesPendentesAprovacao() {
    return this.gerenteService.listarClientesPendentesAprovacao(this.usuario).subscribe({
      next: (data: Cliente[]) => {
        if (data === null) {
          this.clientes = [];
        } else {
          this.clientes = data;
        }
      },
    });
  }

  aprovarAberturaConta($event: MouseEvent, cliente: Cliente) {
    $event.preventDefault();
    if (confirm(`Deseja realmente APROVAR a abertura de conta do cliente ${cliente.nome}?`)) {
      this.gerenteService.aprovarAberturaConta(cliente).subscribe({
        complete: () => {
          this.listarClientesPendentesAprovacao();
        }
      });
    }
  }

  recusarAberturaConta(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalRecusarContaComponent);
    modalRef.componentInstance.nomeCliente = cliente.nome;

    modalRef.result.then((motivoRecusa: string) => {
      this.gerenteService.recusarAberturaConta(cliente, motivoRecusa).subscribe({
        complete: () => {
          this.listarClientesPendentesAprovacao();
        }
      });
    })
  }
}
