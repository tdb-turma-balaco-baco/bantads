import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ClienteService} from 'src/app/cliente/services/cliente.service';
import {Cliente, Endereco} from 'src/app/shared';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  @ViewChild('formCadastro') formCadastro!: NgForm;

  cliente: Cliente = new Cliente();
  loading!: boolean;

  constructor(
    private clienteService: ClienteService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    // Bind dos objetos TypeScript, para trabalhar o formulário
    this.cliente = new Cliente();
    this.cliente.endereco = new Endereco();

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
          this.router.navigate(['/login'], {
            queryParams: {success: 'Solicitação de abertura de conta feita com sucesso!'}
          });
        }
      });
    }

    this.loading = false;
  }
}
