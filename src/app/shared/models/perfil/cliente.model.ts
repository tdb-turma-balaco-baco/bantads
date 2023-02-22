import { ContaBancaria } from "../conta-bancaria/conta-bancaria.model";
import { Endereco } from "../endereco/endereco.model";
import { Usuario } from "../auth/usuario.model";
import { SituacaoConta } from "../conta-bancaria/situacao-conta.type";

export class Cliente extends Usuario {
  constructor(
    public salario?: number,
    public endereco?: Endereco,
    public conta?: ContaBancaria,
    public situacaoConta?: SituacaoConta,
  ) {
    super();
    this.perfil = 'CLIENTE';
  }
}
