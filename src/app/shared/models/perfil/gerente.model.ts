import { Cliente } from './cliente.model';
import { Usuario } from '../auth/usuario.model';

export class Gerente extends Usuario {
  constructor(public clientes?: Array<Cliente>) {
    super();
    this.perfil = 'GERENTE';
  }
}
