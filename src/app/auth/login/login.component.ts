import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('formLogin') formLogin! : NgForm;
    login : Login = new Login();
    loading : boolean = false;
    message! : string;

    constructor(
      private router: Router,
      private route: ActivatedRoute){
        //Validar se usuário já está logado
      }

    ngOnInit(): void {
    }


    autenticar(): void{
      this.loading = true;
      if(this.formLogin.form.valid){
        //Verifica se está correto o login
      }
    }
}
