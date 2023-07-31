import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {of} from "rxjs";
import {ManagerDash} from "../shared/models/manager-dash";
import {httpOptions} from "../shared/http";

const mock = [
  new ManagerDash(1,'nome1','cpf1','email','phone1',0,0,0),
  new ManagerDash(2,'nome2','cpf2','email','phone2',0,0,0),
  new ManagerDash(3,'nome3','cpf3','email','phone3',0,0,0),
  new ManagerDash(4,'nome4','cpf4','email','phone4',0,0,0),
];

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  BASE_URL = environment.apiURL + "/api/manager"
  constructor(private http: HttpClient) { }

  findAllManagersDashboardInfo() {
    return of(mock);
  }

  disableManagerById(managerId: number) {
    return this.http.delete(this.BASE_URL + "/" + managerId, httpOptions);
  }
}
