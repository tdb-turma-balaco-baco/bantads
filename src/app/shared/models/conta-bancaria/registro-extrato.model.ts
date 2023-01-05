import { Cliente } from "../perfil/cliente.model";
import { Operacao } from "./operacao.type";

export class RegistroExtrato {
  constructor(
    public timestamp: Date = new Date(),
    public operacao?: Operacao,
    public valor?: number,
    public origem?: Cliente,
    public destino?: Cliente
  ) {}
}
