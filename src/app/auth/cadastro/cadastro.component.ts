import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import {
  Cidade,
  CidadeService,
  Cliente,
  Endereco,
  Estado,
  EstadoService,
} from 'src/app/shared';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  @ViewChild('formCadastro') formCadastro!: NgForm;

  cliente: Cliente = new Cliente();
  loading!: boolean;
  public estados$: Observable<Estado[]>;
  public cidades$: Observable<Cidade[]>;

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private clienteService: ClienteService,
    public router: Router
  ) {
    this.estados$ = this.estadoService.listarTodosEstados();
    this.cidades$ = this.cidadeService.listarTodasCidades();
  }

  ngOnInit(): void {
    // Bind dos objetos TypeScript, para trabalhar o formulário
    this.cliente = new Cliente();
    this.cliente.endereco = new Endereco();
    this.cliente.endereco.cidade = new Cidade();
    this.cliente.endereco.cidade.estado = new Estado();

    // Define que o radio input padrão é rua, e pode ser alterado em runtime
    this.cliente.endereco!.tipoEndereco = 'Rua';

    this.loading = false;
  }

  cadastrar() {
    this.loading = true;

    if (this.formCadastro.form.valid) {
      this.clienteService.inserir(this.cliente).subscribe({
        complete: () => {
          this.loading = false;
          this.router.navigate(['/login']);
        }
      });
    } else {
      console.log(this.formCadastro.form)
    }

    this.loading = false;
  }
}
