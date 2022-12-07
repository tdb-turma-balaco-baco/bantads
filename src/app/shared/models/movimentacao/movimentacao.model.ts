import { Cliente } from "../cliente/cliente.model";
import { Operacao } from "./operacao.type";

export class Movimentacao {
  constructor(
    public idContaDestino?: number,
    public operacao?: Operacao,
    public valor?: number
  ) {}
}

