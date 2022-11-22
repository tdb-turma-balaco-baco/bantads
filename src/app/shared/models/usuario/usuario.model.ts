import { Perfil } from "./perfil.type";

export class Usuario {
  constructor(
    public id?: string,
    public nome?: string,
    public email?: string,
    public CPF?: string,
    public telefone?: string,
    public perfil?: Perfil
  ) {}
}
