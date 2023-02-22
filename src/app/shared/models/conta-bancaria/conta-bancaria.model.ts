import {Gerente} from "../perfil";
import {SituacaoConta} from "./situacao-conta.type";

export class ContaBancaria {
  constructor(
    public id?: number,
    public saldo?: number,
    public limite?: number,
    public gerente?: Gerente,
    public motivoRecusa?: string,
    public timestampRecusa?: Date,
    public situacaoConta: SituacaoConta = 'PENDENTE',
  ) {
  }
}
