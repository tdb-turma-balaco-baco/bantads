import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {httpOptions} from "../shared/http";
import {LoginResponse} from "../shared/models/login-response.model";
import {LoginRequest} from "../shared/models/login-request.model";
import {LocalStorageKeys} from "../shared/enums/local-storage";
import {UserType} from "../shared/models/user-type.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = environment.apiURL + "/api/auth";

  constructor(private http: HttpClient) {}

  public get isLoggedIn() {
    const obj = localStorage.getItem(LocalStorageKeys.AUTH);
    return (typeof obj !== null);
  }

  public get userType() {
    const obj = localStorage.getItem(LocalStorageKeys.AUTH);
    const json = obj ? JSON.parse(obj) : null;

    if (json && "userType" in json) return json.userType as UserType;
    return null;
  }

  login(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>(
      `${this.BASE_URL}/login`,
      JSON.stringify(loginRequest),
      httpOptions
    );
  }

  saveAuthenticationResponse(response: LoginResponse) {
    localStorage.setItem(LocalStorageKeys.AUTH, JSON.stringify(response));
  }

  logout() {
    localStorage.removeItem(LocalStorageKeys.AUTH);
  }
}
