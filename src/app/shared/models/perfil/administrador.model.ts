import { Perfil } from "./perfil.type";

export class Administrador {
  perfil: Perfil = 'ADMIN'

  constructor(
    public id?: string,
    public login?: string,
  ) {}
}
