import { ContaBancaria } from "../conta-bancaria/conta-bancaria.model";
import { Endereco } from "../endereco/endereco.model";
// import { Usuario } from "../auth/usuario.model";
import { SituacaoConta } from "../conta-bancaria/situacao-conta.type";
import { Perfil } from "./perfil.type";

export class Cliente {
  constructor(
    public id?: number,
    public nome?: string,
    public CPF?: string,
    public telefone?: string,
    public email?: string,
    public perfil?: Perfil,
    public salario?: number,
    public endereco?: Endereco,
    public conta?: ContaBancaria,
    public situacaoConta?: SituacaoConta,
  ) {}
}
