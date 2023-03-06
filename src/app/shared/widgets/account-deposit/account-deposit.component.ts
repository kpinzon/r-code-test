import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-deposit',
  templateUrl: './account-deposit.component.html',
  styleUrls: [ './account-deposit.component.scss' ],
})
export class AccountDepositComponent implements OnInit {
  @Output() depositEvent = new EventEmitter<number>();
  depositFormGroup: FormGroup | undefined;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.depositFormGroup = this._fb.group({
      depositAmount: new FormControl(null, [ Validators.max(10000), Validators.min(1) ]),
    });
  }

  depositButtonClicked(): void {
    this.depositEvent.emit(this.depositFormGroup?.controls['depositAmount'].value);
    this.depositFormGroup?.reset();
  }

  getDepositGroupErrorMessage(): string {
    if (this.depositFormGroup?.controls['depositAmount'].hasError('max')) {
      return 'Max deposit of $10,000';
    }
    return this.depositFormGroup?.controls['depositAmount'].hasError('min') ? 'Deposit must be greater than $0' : '';
  }
}
