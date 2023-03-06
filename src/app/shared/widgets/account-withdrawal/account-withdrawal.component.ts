import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-withdrawal',
  templateUrl: './account-withdrawal.component.html',
  styleUrls: [ './account-withdrawal.component.scss' ],
})
export class AccountWithdrawalComponent implements OnInit {
  private _maxWithdrawalAmount = 0;
  private _accountBalance: number | undefined;

  @Input() get accountBalance() {
    return this._accountBalance;
  }
  set accountBalance(balance: number | undefined) {
    if (balance !== undefined) {
      this._accountBalance = balance;

      this._maxWithdrawalAmount = this.getMaxWithdrawalAmount();

      // Need to update the validators on the withdrawal controls as the balance change will cause the max values to change
      this.updateValidators();
    }
  }

  @Output() withdrawEvent = new EventEmitter<number>();

  withdrawalFormGroup: FormGroup | undefined;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.withdrawalFormGroup = this._fb.group({
      withdrawalAmount: new FormControl(null, [
        Validators.max(this._maxWithdrawalAmount),
        Validators.min(1)
      ]),
    });
  }

  withdrawButtonClicked(): void {
    this.withdrawEvent.emit(this.withdrawalFormGroup?.controls['withdrawalAmount'].value);
    this.withdrawalFormGroup?.reset();
  }


  getWithdrawGroupErrorMessage(): string {
    if (this.withdrawalFormGroup?.controls['withdrawalAmount'].hasError('max')) {
      return `Max withdrawal of $${this._maxWithdrawalAmount}`;
    }
    return this.withdrawalFormGroup?.controls['withdrawalAmount'].hasError('min') ? 'Withdrawal must be greater than $0' : '';
  }

  // A withdrawal cannot leave an account with less than $100
  // A withdrawal can take a maximum of 90% of the total balance
  getMaxWithdrawalAmount(): number {
    if (this._accountBalance && this._accountBalance > 100) {
      const oneHundredMinBalance = this._accountBalance - 100;
      const maxNinetyPercentLimit = this._accountBalance * 0.9;

      return oneHundredMinBalance < maxNinetyPercentLimit ? oneHundredMinBalance : maxNinetyPercentLimit;
    }

    return 0;
  }

  updateValidators(): void {
    const withdrawControl = this.withdrawalFormGroup?.controls['withdrawalAmount'];

    if (withdrawControl) {
      withdrawControl.setValidators([
        Validators.max(this._maxWithdrawalAmount),
        Validators.min(1),
      ]);

      withdrawControl.updateValueAndValidity();
    }
  }
}
