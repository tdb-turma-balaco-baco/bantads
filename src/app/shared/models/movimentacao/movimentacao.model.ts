import { Cliente } from "../cliente/cliente.model";
import { Operacao } from "./operacao.type";

export class Movimentacao {
  constructor(
    public timestamp?: Date,
    public operacao?: Operacao,
    public valor?: number,
    public origem?: Cliente,
    public destino?: Cliente
  ) {}
}
