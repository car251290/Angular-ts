export class Transaction {
    constructor(
      public id: number,
      public description: string,
      public amount: number,
      public type: string 
    ) {}
  }