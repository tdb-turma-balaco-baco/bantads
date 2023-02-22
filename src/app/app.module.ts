import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import ptBr from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClienteModule} from './cliente';
import {GerenteModule} from './gerente';
import {AdminModule} from './admin';
import {AuthModule} from './auth';
import {SharedModule} from './shared';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeLayoutComponent} from './layouts/home-layout/home-layout.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeLayoutComponent,
    LoginLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ClienteModule,
    GerenteModule,
    AdminModule,
    AuthModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
