import { Login } from "./login.model";
import { Perfil } from "../perfil/perfil.type";

export class Usuario extends Login {
  constructor(
    public id?: number,
    public nome?: string,
    public CPF?: string,
    public telefone?: string,
    public perfil?: Perfil,
    email?: string,
    senha?: string
  ) {
    super(email, senha);
  }
}
