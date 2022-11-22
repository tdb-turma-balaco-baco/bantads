import { Estado } from "../estado/estado.model";

export class Cidade {
  constructor(
    public municipio?: string,
    public estado?: Estado,
  ) {}
}
