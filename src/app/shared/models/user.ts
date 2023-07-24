import {UserType} from "../enums/user-type";

export class User {
  constructor(
    public userId?: number,
    public userType?: UserType,
    public token?: string
  ) {
  }
}
