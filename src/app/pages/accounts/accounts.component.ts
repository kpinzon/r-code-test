import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: [ './accounts.component.scss' ],
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  constructor(private _accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this._accountService.getAccountsAsArray();
  }

  createAccount() {
    this._accountService.createAccount();
    this._setAccounts();
  }

  onAccountDeposit(account: Account, amount: number) {
    account.deposit(amount);
  }

  onAccountWithdraw(account: Account, amount: number) {
    account.withdraw(amount);
  }

  onAccountDelete(account: Account) {
    this._accountService.deleteAccount(account);
    this._setAccounts();
  }

  private _setAccounts() {
    this.accounts = this._accountService.getAccountsAsArray();
  }
}
