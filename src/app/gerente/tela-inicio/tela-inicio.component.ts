import {Component} from '@angular/core';
import {GerenteService} from '../services';
import {ClienteService} from "../../cliente";
import {Cliente} from "../../shared";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalRecusarContaComponent} from "../modal-recusar-conta";

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
})
export class TelaInicioComponent {
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private gerenteService: GerenteService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.listarClientesPendentesAprovacao();
  }

  listarClientesPendentesAprovacao() {
    return this.gerenteService.listarClientesPendentesAprovacao().subscribe({
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
