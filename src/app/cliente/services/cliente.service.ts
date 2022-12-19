import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente/cliente.model';
import { RegistroExtrato } from 'src/app/shared/models/registro-extrato/registro-extrato.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  BASE_URL = environment.apiURL + 'clientes';
  URL_MOVIMENTACOES = environment.apiURL + 'movimentacoes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listarTodos() {
    return this.httpClient.get<Cliente[]>(this.BASE_URL, this.httpOptions);
  }

  buscarClientePorId(id: number) {
    return this.httpClient.get<Cliente>(`${this.BASE_URL}/${id}`, this.httpOptions);
  }

  buscarClientePorCPF(cpf: string) {
    return this.httpClient.get<Cliente[]>(`${this.BASE_URL}?CPF=${cpf}`, this.httpOptions);
    // CORRETO: return this.httpClient.get<Cliente>(`${this.BASE_URL}?CPF=${cpf}`, this.httpOptions);
  }

  inserir(cliente: Cliente) {
    if (cliente.salario && cliente.salario > 0) {
      cliente.conta!.limite = cliente.salario / 2;
    } else {
      cliente.salario = 0;
      cliente.conta!.limite = 0;
    }

    const clienteJSON = JSON.stringify(cliente);
    return this.httpClient.post<Cliente>(
      this.BASE_URL,
      clienteJSON,
      this.httpOptions
    );
  }

  listarExtratosPordata( dataInicio : Date, dataFim : Date) {
    //Post pro back com Datas e ID ?cliente?

    return this.httpClient.get<RegistroExtrato[]>(this.URL_MOVIMENTACOES+"?_sort=timestamp&_order=asc&timestamp_gte=" + dataInicio.toISOString() + "&timestamp_lte=" + dataFim.toISOString(), this.httpOptions);
  }

  inserirmovimentacao(movimentacao: RegistroExtrato) {
    const movimentacaoJSON = JSON.stringify(movimentacao);
    return this.httpClient.post<RegistroExtrato>(this.URL_MOVIMENTACOES, movimentacaoJSON, this.httpOptions);
  }

  atualizar(cliente: Cliente) {
    // Atende a regra de negócio de atualizar perfil:
    // Caso haja alteração do salário, o novo limite deve ser calculado.

    if (cliente.salario && cliente.salario > 0) {
      // Se o novo limite for menor que o seu saldo negativo neste momento,
      // então seu limite será ajustado para seu saldo negativo
      if (cliente.salario < 0) {
        cliente.conta!.limite = cliente.salario;
      } else {
        cliente.conta!.limite = cliente.salario / 2;
      }
    } else {
      cliente.salario = 0;
      cliente.conta!.limite = 0;
    }

    const clienteJSON = JSON.stringify(cliente);
    return this.httpClient.put<Cliente>(`${this.BASE_URL}/${cliente.id!}`, clienteJSON, this.httpOptions);
  }
}
