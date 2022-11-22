import { Conta } from "../conta/conta.model";
import { Endereco } from "../endereco/endereco.model";
import { Usuario } from "../usuario/usuario.model";

export class Cliente extends Usuario {
  constructor(
    public salario?: number,
    public endereco?: Endereco,
    public conta?: Conta
  ) {
    super();
  }
}
