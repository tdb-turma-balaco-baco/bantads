export class ManagerInfo {
  constructor(
    public name?: string,
    public totalClients?: number,
    public positiveBalanceSum?: number,
    public negativeBalanceSum?: number,
  ) {
  }
}
