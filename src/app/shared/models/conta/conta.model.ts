import { Gerente } from "../gerente/gerente.model";

export class Conta {
  constructor(
    public id?: string,
    public saldo?: number,
    public limite?: number,
    public gerente?: Gerente
  ) {}
}
