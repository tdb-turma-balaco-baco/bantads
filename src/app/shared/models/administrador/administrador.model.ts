import { Perfil } from "../usuario/usuario.model";

export class Administrador {
  perfil: Perfil = 'ADMIN'

  constructor(
    public id?: string,
    public login?: string,
  ) {}
}
