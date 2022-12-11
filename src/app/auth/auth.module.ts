import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CidadeService, EstadoService, SharedModule } from '../shared';

@NgModule({
  declarations: [LoginComponent, CadastroComponent],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
  providers: [CidadeService, EstadoService],
})
export class AuthModule {}
