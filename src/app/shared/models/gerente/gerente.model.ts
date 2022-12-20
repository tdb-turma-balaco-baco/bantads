import { Cliente } from '../cliente/cliente.model';
import { Perfil } from '../usuario/perfil.type';
import { Usuario } from '../usuario/usuario.model';

export class Gerente extends Usuario {
  override perfil: Perfil = 'GERENTE';
  constructor(public clientes?: Array<Cliente>) {
    super();
  }
}
