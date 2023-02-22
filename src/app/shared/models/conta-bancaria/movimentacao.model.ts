import { Operacao } from "./operacao.type";

export class Movimentacao {
  constructor(
    public idContaOrigem?: number,
    public idContaDestino?: number,
    public operacao?: Operacao,
    public valor?: number
  ) {}
}

