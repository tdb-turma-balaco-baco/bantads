import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Login} from 'src/app/shared';
import {AuthService} from "../../services/auth.service";
import {UserType} from "../../shared/models/user-type.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;

  login: Login = new Login();
  isLoading: boolean = false;
  errorMessage: string = '';
  isErrorMessageVisible: boolean = false;
  alertStyle: string = 'alert alert-danger';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    if (this.authService.isLoggedIn) {
      console.log("fn")
      const userType = this.authService.userType;
      if (userType) {
        this.redirectToUserLandingPage(userType);
      } else {
        this.authService.logout();
      }
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['error'] && params['error'].length > 0) {
        this.isErrorMessageVisible = true;
        this.errorMessage = params['error'];
      }

      if (params['success'] && params['success'].length > 0) {
        this.isErrorMessageVisible = true;
        this.errorMessage = params['success'];
        this.alertStyle = 'alert alert-success';
      }
    });
  }

  authenticate(): void {
    if (this.formLogin.form.valid) {
      const email = this.login.email ?? "";
      const password = this.login.password ?? "";

      this.isLoading = true;
      this.authService.login({email, password}).subscribe({
        next: (res) => {
          this.authService.saveAuthenticationResponse(res);
          this.redirectToUserLandingPage(res.userType);
        },
        error: (err) => {
          this.isErrorMessageVisible = true;
          this.errorMessage = err.status === 403 ? "Credenciais invalidas" : "Erro inesperado";
        }
      });
      this.isLoading = false;
    }
  }

  redirectToUserLandingPage(userType: UserType) {
    const routes: { [T in UserType]: string } = {
      [UserType.ADMIN]: '/admin',
      [UserType.MANAGER]: '/gerente',
      [UserType.CLIENT]: '/cliente'
    }

    const landingPage = routes[userType];
    return this.router.navigate([landingPage]);
  }
}
