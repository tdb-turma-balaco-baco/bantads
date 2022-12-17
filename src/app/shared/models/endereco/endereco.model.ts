import { Cidade } from "../cidade/cidade.model";

export class Endereco {
  constructor(
    public tipoEndereco?: string,
    public logradouro?: string,
    public numero?: number,
    public complemento?: string,
    public bairro?: string,
    public CEP?: string,
    public cidade?: Cidade
  ) {}
}
