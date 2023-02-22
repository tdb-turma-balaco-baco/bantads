import { Cliente } from './cliente.model';
// import { Usuario } from '../auth/usuario.model';

export class Gerente {
  constructor(
    public id?: number,
    public nome?: string,
    public CPF?: string,
    public email?: string,
    public telefone?: string,
    public totalClientes?: number,
    public clientes?: Array<Cliente>
  ) {}
}
