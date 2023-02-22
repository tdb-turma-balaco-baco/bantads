export class Endereco {
  constructor(
    public id?: number,
    public tipoEndereco?: string,
    public logradouro?: string,
    public numero?: number,
    public complemento?: string,
    public cep?: string,
    public cidade?: string,
    public estado?: string
  ) {}
}
