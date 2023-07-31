export class ManagerDash {
  constructor(
    public id: number,
    public name: string,
    public cpf: string,
    public email: string,
    public phonenumber: string,
    public clientsTotal: number,
    public positiveBalanceTotal: number,
    public negativeBalanceTotal: number
  ) {
  }
}
