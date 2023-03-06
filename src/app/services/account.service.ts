import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable()
export class AccountService {
  private _idForNewAccount = 1000;
  private _accounts: Record<string, Account> = {};

  constructor() {}

  createAccount() {
    this._accounts[this._idForNewAccount] = new Account(this._idForNewAccount);
    this._idForNewAccount += 1;
  }

  getAccountsAsArray() {
    const keys = Object.keys(this._accounts);
    return keys.map(key => this._accounts[key]);
  }

  deleteAccount(account: Account) {
    delete this._accounts[account.id];
  }
}
