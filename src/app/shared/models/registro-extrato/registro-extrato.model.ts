import { Cliente } from "../cliente/cliente.model";
import { Operacao } from "../movimentacao/operacao.type";

export class RegistroExtrato {
  constructor(
    public timestamp?: Date,
    public operacao?: Operacao,
    public valor?: number,
    public origem?: Cliente,
    public destino?: Cliente
  ) {}
}
