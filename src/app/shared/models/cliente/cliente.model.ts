import { Conta } from "../conta/conta.model";
import { Endereco } from "../endereco/endereco.model";
import { Usuario } from "../usuario/usuario.model";
import { SituacaoConta } from "./situacao-conta.type";

export class Cliente extends Usuario {
  constructor(
    public salario?: number,
    public endereco?: Endereco,
    public conta?: Conta,
    public situacaoConta?: SituacaoConta,
  ) {
    super();
  }
}
