import { Component } from '@angular/core';
import { AutenticacaoService } from './auth/services/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BANTADS';
  exibirMenuLateral!: boolean;

  constructor(private loginService: AutenticacaoService) {}

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
