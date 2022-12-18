import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Perfil } from 'src/app/shared';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  mensagemErro!: string;

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
      this.mensagemErro = params['error'];
    });
  }

  autenticar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe({
        next: (usuario) => {
          if (usuario !== null) {
            this.loginService.usuarioAutenticado = usuario;
            this.loading = false;
            this.router.navigate(this.definirRotaAutenticada(usuario.perfil));
          } else {
            this.loading = false;
            this.mensagemErro = 'E-mail/Senha inválidos';
          }
        },
        error: () => {
          this.loading = false;
          this.mensagemErro = 'E-mail/Senha inválidos';
        },
      });
    }
  }

  definirRotaAutenticada(perfil: Perfil | undefined): String[] {
    if (perfil === 'ADMIN') return ['/admin'];
    if (perfil === 'GERENTE') return ['/gerente'];
    if (perfil === 'CLIENTE') return ['/cliente'];
    return ['/login'];
  }
}
