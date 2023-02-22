import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AutenticacaoService } from "src/app/auth/services";
import { Gerente, Usuario } from "src/app/shared";
import { AdminService } from "../services/admin.service";

@Component({
  selector: 'app-editar-gerente',
  templateUrl: './editar-gerente.component.html',
})
export class EditarGerenteComponent implements OnInit {
  @ViewChild("formGerente") formGerente!: NgForm;
  novoGerente: boolean = true;
  gerente: Gerente = new Gerente();
  id!: string;
  loading!: boolean;
  perfilAtual!: Usuario;

  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router, private authService: AutenticacaoService) { }

  ngOnInit(): void {
    this.perfilAtual = this.authService.usuarioAutenticado;

    this.gerente = new Gerente();
    this.loading = false;



    this.id = this.route.snapshot.params['id'];
    this.novoGerente = !this.id;

    if (!this.novoGerente) {
      this.adminService.buscarPorId(+this.id).subscribe(
        gerente => {
          this.gerente = gerente;
        }
      )
    }
  }

  salvar(): void {
    this.loading = true;
    if (this.formGerente.form.valid) {
      if (this.novoGerente) {
        this.adminService.inserirGerente(this.gerente).subscribe(
          gerente => {
            this.loading = false;
            this.router.navigate(["/admin"])
          }
        );
      }
      else {
        this.adminService.alterarGerente(this.gerente).subscribe(
          gerente => {
            this.loading = false;
            this.router.navigate( ["/admin"] );
          }
        );
      }
      this.loading = false;
    }

  }
}


