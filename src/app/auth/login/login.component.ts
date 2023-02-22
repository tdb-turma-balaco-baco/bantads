import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Perfil } from 'src/app/shared';
import { AutenticacaoService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;

  login: Login = new Login();
  loading: boolean = false;
  mensagem: string = 'E-mail/Senha inválidos';
  exibirMensagem: boolean = false;
  alertStyle: string = 'alert alert-danger';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: AutenticacaoService
  ) {
    // Validar se usuário já está logado
    if (this.loginService.usuarioAutenticado) {
      this.router.navigate(
        this.definirRotaAutenticada(this.loginService.usuarioAutenticado.perfil)
      );
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['error'] && params['error'].length > 0) {
        this.exibirMensagem = true;
        this.mensagem = params['error'];
      }

      if (params['success'] && params['success'].length > 0) {
        this.exibirMensagem = true;
        this.mensagem = params['success'];
        this.alertStyle = 'alert alert-success';
      }
    });
  }

  autenticar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe({
        next: (usuario) => {
          if (usuario !== null && usuario !== undefined) {
            this.loginService.usuarioAutenticado = usuario;
            this.loading = false;
            this.router.navigate(
              this.definirRotaAutenticada(usuario.perfil)
            );
          } else {
            this.loading = false;
            this.exibirMensagem = true;
          }
        },
      });
    }
  }

  definirRotaAutenticada(perfil: Perfil | undefined): String[] {
    const rotaPorPerfil = {
      'ADMIN': ['/admin'],
      'GERENTE': ['/gerente'],
      'CLIENTE': ['/cliente'],
      DEFAULT: ['/login'],
    };

    if (!perfil) return rotaPorPerfil.DEFAULT;
    return rotaPorPerfil[perfil];
  }
}
