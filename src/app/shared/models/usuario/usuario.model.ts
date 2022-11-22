export type Perfil = "CLIENTE" | "GERENTE" | "ADMIN";

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
