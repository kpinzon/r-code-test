export class Account {
  private readonly _id: number;
  private _balance: number;

  get id() {
    return this._id;
  }

  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    this._balance = newBalance;
  }

  constructor(id: number) {
    this._id = id;
    this._balance = 100;
  }

  deposit(amount: number) {
    if (amount > 10000) {
      return;
    }

    this._balance += amount;
  }

  withdraw(amount: number) {
    const newBalance = this._balance - amount;
    const ninetyPercentBalance = this._balance * 0.90;

    if (newBalance < 100 || amount > ninetyPercentBalance) {
      return;
    }

    this._balance -= amount;
  }


}
