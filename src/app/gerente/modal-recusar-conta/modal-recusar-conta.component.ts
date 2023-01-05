import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-recusar-conta',
  templateUrl: './modal-recusar-conta.component.html',
})
export class ModalRecusarContaComponent {
  @Input() nomeCliente!: string;
  motivoRecusa: string = "";

  constructor(public activeModal: NgbActiveModal) {
  }

  onConfirm() {
    this.activeModal.close(this.motivoRecusa);
  }
}
