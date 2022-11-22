import { Perfil } from '../usuario/perfil.type';
import { Usuario } from '../usuario/usuario.model';

export class Gerente extends Usuario {
  override perfil: Perfil = 'GERENTE';
}
