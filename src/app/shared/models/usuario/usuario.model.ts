import { Login } from "../login/login.model";
import { Perfil } from "./perfil.type";

export class Usuario extends Login {
  constructor(
    public id?: string,
    public nome?: string,
    public email?: string,
    public CPF?: string,
    public telefone?: string,
    public perfil?: Perfil,
    login?: string,
    senha?: string
  ) {
    super(login, senha);
  }
}
