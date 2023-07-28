import {UserType} from "./user-type.enum";

export class LoginResponse {
  constructor(public token: string, public userType: UserType) {
  }
}
