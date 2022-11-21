import { Cliente } from "../cliente/cliente.model";

export type Operacao = "TRANSFERÊNCIA" | "DEPÓSITO"  | "SAQUE";

export class Movimentacao {
  constructor(
    public dataHora?: Date,
    public operacao?: Operacao,
    public valor?: number,
    public origem?: Cliente,
    public destino?: Cliente
  ) {}
}
