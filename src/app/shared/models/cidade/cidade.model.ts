import { Estado } from "../estado/estado.model";

export class Cidade {
  constructor(
    public id?: number,
    public municipio?: string,
    public estado?: Estado,
  ) {}
}
