import { Perfil, Usuario } from "../usuario/usuario.model";

export class Gerente extends Usuario {
  override perfil: Perfil = "GERENTE";
}
