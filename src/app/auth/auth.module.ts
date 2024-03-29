import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {
  NumericoDirective,
  SharedModule,
} from '../shared';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MinValidatorDirective } from '../shared/directives/min-validator.directive';
import { ClienteService } from '../cliente/services/cliente.service';
import { NgxCurrencyModule } from 'ngx-currency';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    NumericoDirective,
    MinValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule
  ],
  providers: [ClienteService],
})
export class AuthModule {}
